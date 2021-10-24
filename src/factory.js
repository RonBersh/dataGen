import axios from "axios";

var url = "assets/samplejson/profile_data.json";
var headers_config = {
    'Authorization': 'b699bda45c6cb0c4e28eb9e98c849f4e0ad212333412a91b60a13ca1a47d25bc'
}



export function getProfileData() {
    var config = {
        method: 'get',
        url: url,
        headers: headers_config
    };

    let res = null;

    axios(config)
        .then(function (response) {
            console.log('in factory', response.data);
            return response.data;

        })
        .catch(function (error) {
            console.log(error);
            return error;
        });



    return res;

}

export function getFormattedBigNumber(num) {
    if (num >= 1e6) {
        num = Math.floor(num / 1e5) / 10
        num = Math.ceil(num);
        return `${num}M`;
    } else if (num >= 1e3) {
        num = Math.floor(num / 1e2) / 10;
        num = Math.ceil(num);
        return `${num}K`;
    }
    return Math.ceil(num);
}