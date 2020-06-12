import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import faker from 'faker';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post(url: string = faker.internet.url()): Promise<void> {
    this.url = url;
    return Promise.resolve();
  }
}
