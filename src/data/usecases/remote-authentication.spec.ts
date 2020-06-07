import { RemoteAuthentication } from '@/data/usecases/remote-authentication';
import { HttpPostClientSpy } from '@/data/test';

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', () => {
    const url = 'any_url';
    const httpPostClient = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClient);
    sut.auth();
    expect(httpPostClient.url).toBe(url);
  });
});
