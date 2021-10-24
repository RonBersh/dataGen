.PHONY: build-nginx-st
build-nginx-st:
	DOCKER_BUILDKIT=1 docker build --network host -t gcr.io/decisive-engine-206913/vue-nginx-st:$(tag) \
		-f docker/staging/Dockerfile .

.PHONY: build-nginx
build-nginx:
	DOCKER_BUILDKIT=1 docker build --network host -t gcr.io/decisive-engine-206913/vue-nginx:$(tag) \
		-f docker/production/Dockerfile .





.PHONY: push-nginx-st
push-nginx-st:
	docker push gcr.io/decisive-engine-206913/vue-nginx-st:$(tag)

.PHONY: push-nginx
push-nginx:
	docker push gcr.io/decisive-engine-206913/vue-nginx:$(tag)





.PHONY: bp-nginx-st
bp-nginx-st:
	DOCKER_BUILDKIT=1 docker build --network host -t gcr.io/decisive-engine-206913/vue-nginx-st:$(tag) \
		-f docker/staging/Dockerfile . && \
	docker push gcr.io/decisive-engine-206913/vue-nginx-st:$(tag)

.PHONY: bp-nginx
bp-nginx:
	DOCKER_BUILDKIT=1 docker build --network host -t gcr.io/decisive-engine-206913/vue-nginx:$(tag) \
		-f docker/production/Dockerfile . && \
	docker push gcr.io/decisive-engine-206913/vue-nginx:$(tag)