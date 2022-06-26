import postsService, { PostsService } from './postsService';

export interface Services {
  postsService: PostsService;
}

const services: Services = {
  postsService,
};

export default services;
