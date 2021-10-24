import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueRouter from 'vue-router';
import Router from 'vue-router';
import router from "../router.js";
import VueAxios from "vue-axios";
import VueCookies from 'vue-cookies'

import {
  getBestInstagramPosts,
  sortInstagramPosts,
  getTopHashtags
} from "../format";




Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(Router)
Vue.use(VueCookies);


const baseURL = process.env.VUE_APP_BASE_URL_NODE;
const config = "";

const urlProfile = baseURL + "/profile?username=";
const urlImages = baseURL + "/highlights?username=";
const urlHashtag = baseURL + "/hashtags?username=";
const urlFollower_information = baseURL + "/follower_information";


const urlUpdate = baseURL + "/update";
const urlSignup = baseURL + "/signup?username=";
const urlConfirmation = baseURL + "/confirmation?username=";
const urlPassword = baseURL + "/sign_up_password";
const urlLogin = baseURL + "/login";

//update profile url with

const urlUpdateBio = baseURL + "/update_bio";
const urlUpdateLocation = baseURL + "/update_location";
const urlUpdateCategory = baseURL + "/update_categories";
const urlUpdateHashtag = baseURL + "/update_hashtags";





export default ({
  name: 'user',
  state: {
    user: [],
    account: {
      username: $cookies.get('user_name'),
      isLogIn: false,
      showError_signup: false,
      emailEncrypt: '',
      token: $cookies.get('user_token'),
      hasConfirmation: true,
      header_email_scraper: false,
      LoginFail: false,
      reset_password: $cookies.get('reset_password'),
      UserExists: {
        userExists: true,
        notFound: true,
        loader: true,
      },
      hasSnackBar: "hide",
    },
    profile_stats: {
      search_apprenced: 960,
      profile_view: 150,
      profile_click: 19,
      profile_partnership: 50,
      profile_peer: 300
    },
    steps_progress: {
      profile_description: false,
      profile_location: false,
      profile_categories: false,
      profile_hashtags: false,
    },
    profile_strength: "Low",
    profile_images: [],
    bestPosts: {},
    profile_hashtags: [],
    profile_top_hashtags: [],
    follower_information: {
      avg_age: 25,
      female_percentage: 50,
      male_percentage: 50,
      countries: {
        USA: 25,
        India: 15,
        Russia: 10,
        other: 50
      },
      isDisclaimer: true,
    },

  },
  getters: {
    isAuthenticated({}) {
      if ($cookies.get('user_name') != undefined && $cookies.get('user_token') != undefined) {
        return true;
      }
      return false;
    }
  },
  actions: {


    sendSignup({
      commit,
      state
    }) {
      let url = urlSignup + this.state.user.account.username + "&email_scraper=" + this.state.user.account.header_email_scraper + '&reset_password=' + this.state.user.account.reset_password;
      let config_signup = {

      };

      axios.get(url, config_signup).then(result => {
        commit('SEND_SIGNUP', result.data);
      }).catch(error => {
        // throw new Error(`API ${error}`);
        console.log(error);
        commit('SEND_SIGNUP_ERROR', error.response.status);
      });
    },

    forgotPassword({
      commit,
      state
    }) {
      commit('FORGOT_PASSWORD', true);
    },


    sendUserExists({
      commit,
      state
    }) {
      let url = urlSignup + this.state.user.account.username + "&email_scraper=" + this.state.user.account.header_email_scraper;
      axios.get(url, config).then(result => {
        commit('SEND_USER_EXISTS', result.data);
      }).catch(error => {
        console.log(error);
        commit('SEND_USER_EXISTS_ERROR', error.response.status);
      });
    },

    sendConfirmation({
      commit,
      state
    }, email_code) {

      let url = urlConfirmation + this.state.user.account.username;
      let config_confirmation = {
        headers: {
          'code': email_code
        }
      };

      axios.get(url, config_confirmation).then(result => {
        commit('SEND_CONFIRMATION', result.data, this.state.user.account.username);

      }).catch(error => {
        // throw new Error(`API ${error}`);
        commit('SEND_CONFIRMATION_ERROR', error);
        console.log(error);
      });
    },


    sendPassword({
      commit,
      state
    }, password) {

      let url = urlPassword;
      let data = {
        "password": password
      };
      let dataSend = JSON.stringify(data);

      let config_password = {
        headers: {
          'token': this.state.user.account.token,
          'Content-Type': 'application/json'
        }
      };

      axios.post(url, dataSend, config_password).then(result => {
        commit('SEND_PASSWORD', result.data);

      }).catch(error => {
        commit('SEND_PASSWORD_ERROR', error);
        // throw new Error(`API ${error}`);
        console.log(error);
      });
    },


    sendLogin({
      commit,
      state
    }, data) {

      let url = urlLogin;
      var username = data.username;
      let dataSend = JSON.stringify(data)

      console.log('need to be json', dataSend);
      let config_login = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      axios.post(url, dataSend, config_login).then(result => {
        //remove this code later and add cockie for username and token  
        this.state.user.account.username = username;
        commit('SEND_LOGIN', result.data, this.state.user.account.username);

      }).catch(error => {
        // throw new Error(`API ${error}`);
        console.log(error);
        commit('SEND_LOGIN_ERROR', error.response);
      });
    },



    getProfile({
      commit
    }) {


      let url = urlProfile + this.state.user.account.username;
      console.log(url);
      axios.get(url, config).then(result => {
        commit('GET_PROFILE_DATA', result.data);
        commit('UPDATE_USERCOM_CUSTOM');
      }).catch(error => {
        throw new Error(`API ${error}`);
        console.log(error);
      });
    },

    getProfileHashtags({
      commit
    }) {

      let url = urlHashtag + this.state.user.account.username;

      axios.get(url, config).then(result => {
        commit('GET_PROFILE_HASHTAGS', result.data.hashtags);
      }).catch(error => {
        throw new Error(`API ${error}`);
        console.log(error);
      });
    },

    getProfileImages({
      commit
    }) {

      let url = urlImages + this.state.user.account.username;

      axios.get(url, config).then(result => {
        commit('GET_PROFILE_IMAGES', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
        console.log(error);
      });
    },

    getProfile_Follower_information({
      commit
    }) {

      let url = urlFollower_information;
      let config_fi = {
        headers: {
          'token': this.state.user.account.token,
          'Content-Type': 'application/json'
        }
      };

      axios.get(url, config_fi).then(result => {

        commit('GET_PROFILE_FOLLOWER_INFORMATION', result.data.res);

      }).catch(error => {
        throw new Error(`API ${error}`);
        console.log(error);
      });
    },




    // send post request to the API when the user edited  his profile information with the new state prop that been updated 
    saveProfile({
      commit
    }) {
      let data = {
        profile_description: this.state.user.user.biography,
        profile_location: this.state.user.user.location_country,
        profile_categories: this.state.user.user.categories,
        profile_hashtags: this.state.user.profile_hashtags
      }

      console.log('the data that I send to update is : ', data)
      // create post api call and update  specific profile  fields 

      axios.post(urlUpdate, data)
        .then(response => console.log('response from node js call ', response.data))
        .catch(error => {
          console.error("There was an error in the call to the backend!", error);
        });
    },

    updateDescription({
      commit
    }) {

      let url = urlUpdateBio;
      let data = {
        biography: this.state.user.user.biography

      }
      let dataSend = JSON.stringify(data);
      console.log(dataSend);

      let config_update = {
        headers: {
          'token': this.state.user.account.token,
          'Content-Type': 'application/json'
        }
      };

      axios.post(url, dataSend, config_update).then(result => {
        console.log(result.data);
        commit('SET_SNACKBAR', result.data);

      }).catch(error => {
        console.log(error);
      });
    },

    updateLocation({
      commit
    }) {

      let url = urlUpdateLocation;
      let data = {
        country_name: this.state.user.user.location_country,
        city_name: '',
        region_name: ''

      }
      let dataSend = JSON.stringify(data);
      console.log(dataSend);

      let config_update = {
        headers: {
          'token': this.state.user.account.token,
          'Content-Type': 'application/json'
        }
      };

      axios.post(url, dataSend, config_update).then(result => {
        console.log(result.data);
        commit('SET_SNACKBAR', result.data);

      }).catch(error => {
        console.log(error);
      });
    },

    updateCategory({
      commit
    }) {

      let url = urlUpdateCategory;
      let data = {
        categories: this.state.user.user.categories
      }

      let dataSend = JSON.stringify(data);
      console.log(dataSend);

      let config_update = {
        headers: {
          'token': this.state.user.account.token,
          'Content-Type': 'application/json'
        }
      };

      axios.post(url, dataSend, config_update).then(result => {
        console.log(result.data);
        commit('SET_SNACKBAR', result.data);

      }).catch(error => {
        console.log(error);
      });
    },
   
    updateHashtags({
      commit
    }) {

      let url = urlUpdateHashtag;

      //remove # from the arr
      let newHashtag = [];
      if (newHashtag) {
        this.state.user.profile_hashtags.forEach(el =>
          newHashtag.push(el.slice(1))
        )
      }

      console.log('new hashtag', newHashtag);
      let data = {
        hashtags: newHashtag
      }

      let dataSend = JSON.stringify(data);
      console.log(dataSend);

      let config_hashtags = {
        headers: {
          'token': this.state.user.account.token,
          'Content-Type': 'application/json'
        }
      };

      axios.post(url, dataSend, config_hashtags).then(result => {
        console.log(result.data);
        commit('SET_SNACKBAR', result.data);

      }).catch(error => {
        console.log(error);
      });
    }

  },
  mutations: {

    SEND_SIGNUP(state, res) {
      state.account.emailEncrypt = res.data.msg;
      state.account.username = state.account.username;
      state.account.UserExists.userExists = true;

      console.log('res sign up  ', res)
      if (res.status === 208) {
        router.push({
          name: 'Login'
        })

      } else if (res.status === 200) {
        router.push({
          name: 'Confirmation'
        })
      }
    },

    SEND_SIGNUP_ERROR(state, res) {
      console.log('res sign up  ', res)
      switch (res) {
        case 400:
          // this user not have public email address
          state.account.UserExists.userExists = false;
          break;
        case 425:
          //add loader
          state.account.UserExists.loader = false;
          // User not exists in our system  call again  to scrap him with a loop  and check if status code is not 425
          setTimeout(() => this.dispatch('sendUserExists'), 5000);
          break;
        case 402:
          // not exist in the Instagram system.
          state.account.UserExists.notFound = false;
          break;
        default:
          state.account.UserExists.notFound = false;
      }
    },

    SEND_USER_EXISTS(state, res) {
      console.log('SEND_USER_EXISTS success', res);
      state.account.UserExists.loader = true;
      state.account.emailEncrypt = res.data.msg;

      router.push({
        name: 'Confirmation'
      })
    },
    SEND_USER_EXISTS_ERROR(state, res) {
      state.account.UserExists.loader = true;
      console.log('res user exists status code   ', res)
      switch (res) {
        case 400:
          // this user not have public email address
          state.account.UserExists.userExists = false;
          break;
        case 425:
          // in the scraper quaue ask him again for response
          state.account.UserExists.loader = false;
          setTimeout(() => this.dispatch('sendUserExists'), 5000);
          break;
        case 402:
          // not exist in the Instagram system.
          state.account.UserExists.notFound = false;
          break;

        case 500:
          state.account.UserExists.notFound = false;
          break;
        default:
          state.account.UserExists.notFound = false;
      }
    },

    SEND_CONFIRMATION(state, res, username) {
      state.account.hasConfirmation = true;
      $cookies.set('user_token', res.Token, 60 * 60 * 24 * 30);
      state.account.token = res.Token;

      router.push({
        name: 'Password'
      })
    },

    SEND_CONFIRMATION_ERROR(state, res) {
      state.account.hasConfirmation = false;
      console.log(res);
    },

    SEND_PASSWORD(state, res) {
      console.log('password change', res);
      $cookies.set('user_name', state.account.username, 60 * 60 * 24 * 30);
      $cookies.set('user_token', res.token, 60 * 60 * 24 * 30);
      $cookies.set('reset_password', 'false', 15 * 60 * 24 * 30);

      router.push({
        name: 'profile'
      })


    },

    SEND_PASSWORD_ERROR(state, res) {
      console.log('bug with password change', res);
      $cookies.set('user_name', '', 60 * 60 * 24 * 30);
      $cookies.set('user_token', '', 60 * 60 * 24 * 30);
    },

    SEND_LOGIN(state, res, username) {
      state.account.token = res.Token;
      state.account.LoginFail = false;
      $cookies.set('user_name', state.account.username, 60 * 60 * 24 * 30);
      $cookies.set('user_token', res.Token, 60 * 60 * 24 * 30);
      $cookies.set('reset_password', 'false', 15 * 60 * 24 * 30);

      router.push({
        name: 'profile'
      })

    },
    FORGOT_PASSWORD(state, res) {
      // state.account.token = res.Token;
      // state.account.LoginFail = false;
      // $cookies.set('user_name', state.account.username, 60 * 60 * 24 * 30);
      // $cookies.set('user_token', res.Token, 60 * 60 * 24 * 30);
      state.account.reset_password = res;
      $cookies.set('reset_password', 'true', 15 * 60 * 24 * 30);
      router.push({
        name: "ResetPassword"
      });
    },

    LOGOUT_PROFILE(state, res) {
      $cookies.set('user_name', '', 60 * 60 * 24 * 30);
      $cookies.set('user_token', '', 60 * 60 * 24 * 30);
      router.push({
        name: 'Login'
      })
    },

    SEND_LOGIN_ERROR(state, res) {
      state.account.LoginFail = true;
      $cookies.set('user_name', '', 60 * 60 * 24 * 30);
      $cookies.set('user_token', '', 60 * 60 * 24 * 30);
      console.log('login fail', res);

    },

    GET_PROFILE_DATA(state, user) {
      state.user = user;
      console.log('get user state mounted state', this.state.user.user);


    },

    GET_PROFILE_FOLLOWER_INFORMATION(state, res) {
      state.follower_information = JSON.parse(res);
      if (state.follower_information.avg_age === 0 || state.follower_information.avg_age == undefined) {
        state.follower_information.avg_age = 25;
      }
      if (state.follower_information.female_percentage === 0 && state.follower_information.male_percentage === 0) {
        state.follower_information.female_percentage = 50;
        state.follower_information.male_percentage = 50;
      }
      if (Object.keys(state.follower_information.countries).length === 0) {
        state.follower_information.countries = {
          USA: 25,
          India: 15,
          Russia: 10,
          other: 50
        }
      } else {
        console.log('follower_information country work');
      }
      state.follower_information.isDisclaimer = false;
      console.log('GET_PROFILE_FOLLOWER_INFORMATION', state.follower_information);
    },

    GET_PROFILE_HASHTAGS(state, profile_hashtags) {

      state.profile_top_hashtags = getTopHashtags(profile_hashtags);
      profile_hashtags.forEach(element => state.profile_hashtags.push('#' + element.hashtag));
      state.profile_hashtags = state.profile_hashtags;
      console.log('user profile top 3 hashtags ', this.state.user.profile_top_hashtags);
      console.log('get user profile profile_hashtags state', this.state.user.profile_hashtags);
    },

    GET_PROFILE_HASHTAGS(state, profile_hashtags) {

      state.profile_top_hashtags = getTopHashtags(profile_hashtags);
      profile_hashtags.forEach(element => state.profile_hashtags.push('#' + element.hashtag));
      state.profile_hashtags = state.profile_hashtags;
      console.log('user profile top 3 hashtags ', this.state.user.profile_top_hashtags);
      console.log('get user profile profile_hashtags state', this.state.user.profile_hashtags);
    },


    GET_PROFILE_IMAGES(state, profile_images) {
      state.profile_images = sortInstagramPosts(profile_images.data.highlights);
      console.log('get user profile images state', this.state.user.profile_images);
      // state.bestPosts= sortInstagramPosts(state.profile_images.data.highlights)
      // console.log('bestPosts', this.state.user.bestPosts);
    },

    // GET_PROFILE_BEST_IMAGES(state, profile_images) {
    //   state.profile_images = profile_images;
    //   console.log('get user profile images state', this.state.user.profile_images);
    // },




    // functions that update the profile state when users want to edit thier profile information

    UPDATE_PROFILE_DESCRIPTION(state, newData) {
      this.state.user.user.biography = newData;
      this.state.user.steps_progress.profile_description = true;
    },

    UPDATE_PROFILE_LOCATION(state, newData) {
      this.state.user.user.location_country = newData;
      this.state.user.steps_progress.profile_location = true;
    },
    UPDATE_PROFILE_CATEGORY(state, newData) {
      this.state.user.user.categories.push(newData);
      this.state.user.steps_progress.profile_categories = true;
      console.log(this.state.user.user.categories);
    },
   
    REMOVE_CATEGORY(state, newData) {
      const index = this.state.user.user.categories.indexOf(newData);
      this.state.user.user.categories.splice(index, 1);
      this.state.user.steps_progress.profile_categories = true;
      console.log(this.state.user.user.categories);
    },
    UPDATE_PROFILE_HASHTAGS(state, newHashtag) {
      let addTag = newHashtag;

      console.log('newHashtag', newHashtag);
      console.log('profile_hashtag in update func ', this.state.user.profile_hashtags)

      this.state.user.profile_hashtags.push(addTag);
      this.state.user.profile_top_hashtags.push(addTag);

      console.log('profile_hashtags update func', this.state.user.profile_hashtags)
      console.log('profile top hashtags update func', this.state.user.profile_hashtags)

      this.state.user.steps_progress.profile_hashtags = true;
    },
    SET_SNACKBAR(state, newData) {
      this.state.user.account.hasSnackBar = "show"
      setTimeout(() => this.state.user.account.hasSnackBar = "hide", 3000);
    },
    SET_COOKIES(name, val) {
      let expires = 60 * 60 * 24 * 30;

      VueCookies.set('user_token', name, 60 * 60 * 24 * 30);
      VueCookies.set('user_name', user_name, 60 * 60 * 24 * 30);
    },
    UPDATE_EMAIL_SCARPER(state, newData) {
      console.log('UPDATE_EMAIL_SCARPER', newData);
      this.state.user.account.header_email_scraper = newData;
    },

    UPDATE_USERCOM_CUSTOM() {

      let civchat = {
        apiKey: "3mmmc6",
        email: this.state.user.user.business_email,
        all_hashtags: JSON.stringify(this.state.user.user.all_hashtags),
        all_mentions: JSON.stringify(this.state.user.user.all_mentions),
        audience_age_gender: this.state.user.user.audience_age_gender,
        audience_languages: JSON.stringify(this.state.user.user.audience_languages),
        audience_location: this.state.user.user.audience_location,
        business_email: this.state.user.user.business_email,
        categories: JSON.stringify(this.state.user.user.categories),
        cost_post: this.state.user.user.cost_post,
        created_at_time: this.state.user.user.created_at,
        deleted: this.state.user.user.deleted,
        engagement_rate: this.state.user.user.engagement_rate,
        followers: this.state.user.user.followers,
        gender: this.state.user.user.gender,
        is_private: this.state.user.user.is_private,
        is_verified: this.state.user.user.is_verified,
        languages: JSON.stringify(this.state.user.user.languages),
        location_city: this.state.user.user.location_city,
        location_country: this.state.user.user.location_country,
        profile_pic_url_hd: this.state.user.user.profile_pic_url_hd,
        username: this.state.user.user.username,

      };

      window.civchat = civchat;
      console.log(' window.civchat', civchat);
    }




  }
})