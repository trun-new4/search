import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiDataStoreService } from './api.data.store.service';
import { TestBed } from '@angular/core/testing';
import { ApiService, ApiServiceGetRequest } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ ApiDataStoreService ]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

    afterEach(() => {
      httpMock.verify();
    });

  describe('GET', ()=> {
    const testData = { name: 'Test Data' };

    it('GET - with data store cache', ()=> {
      const mockRequest: ApiServiceGetRequest = {
        endpoint: '/api',
        cache: { 
          expiry: 5
        }
      };
      spyOn(service, 'storeRequest').and.callFake;
  
      service.get(mockRequest).subscribe((data) => {
        expect(service.storeRequest).toHaveBeenCalled();
        return expect(data).toEqual(testData);
      });
    
      const req = httpMock.expectOne(mockRequest.endpoint);
    
      expect(req.request.method).toEqual('GET');
      
      req.flush(testData);
    });

    it('GET - without data store cache', ()=> {
      const mockRequest: ApiServiceGetRequest = {endpoint: '/api'};
      spyOn(service, 'storeRequest').and.callFake;
  
      service.get(mockRequest).subscribe((data) => {
        expect(service.storeRequest).not.toHaveBeenCalled();
        return expect(data).toEqual(testData);
      });
    
      const req = httpMock.expectOne(mockRequest.endpoint);
    
      expect(req.request.method).toEqual('GET');
      
      req.flush(testData);
    });
  })

  it('POST', ()=> {
    const mockEndpoint =  '/api';
    const mockBody = { test: 'test' };
    const mockResponse = { name: 'Test Data' };

    service.post(mockEndpoint, mockBody).subscribe((data) => {
      return expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(mockEndpoint);
    
    expect(req.request.method).toEqual('POST');
    
    req.flush(mockResponse);
  });

  it('PUT', ()=> {
    const mockEndpoint =  '/api';
    const mockBody = { test: 'test' };
    const mockResponse = { name: 'Test Data' };

    service.put(mockEndpoint, mockBody).subscribe((data) => {
      return expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(mockEndpoint);
    
    expect(req.request.method).toEqual('PUT');
    
    req.flush(mockResponse);
  });

  it('DELETE', ()=> {
    const mockEndpoint =  '/api';
    const mockResponse = { name: 'Test Data' };

    service.delete(mockEndpoint).subscribe((data) => {
      return expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(mockEndpoint);
    
    expect(req.request.method).toEqual('DELETE');
    
    req.flush(mockResponse);
  });

  it('PATCH', ()=> {
    const mockEndpoint =  '/api';
    const mockBody = { test: 'test' };
    const mockResponse = { name: 'Test Data' };

    service.patch(mockEndpoint, mockBody).subscribe((data) => {
      return expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(mockEndpoint);
    
    expect(req.request.method).toEqual('PATCH');
    
    req.flush(mockResponse);
  });

  describe('RequestHandler', ()=> {
    it('RequestHandler - do store', ()=> {
      const mockRequest: ApiServiceGetRequest = {
        endpoint: '/api', 
        cache: {
          expiry: 10
        }};
      const mockBody = { test: 'test' };
      spyOn(service, 'storeRequest').and.callFake;
      service.requestHandler(mockRequest, mockBody);

      expect(service.storeRequest).toHaveBeenCalledWith(mockRequest, mockBody)
    });

    it('RequestHandler - do not store - undefined cache key', ()=> {
      const mockRequest: ApiServiceGetRequest = {
        endpoint: '/api'};
      const mockBody = { test: 'test' };
      spyOn(service, 'storeRequest').and.callFake;
      service.requestHandler(mockRequest, mockBody);

      expect(service.storeRequest).not.toHaveBeenCalled();
    });
  });

  it('Store Request', ()=> {
    const mockRequest: ApiServiceGetRequest = {
      endpoint: '/api', 
      cache: {
        expiry: 10
      }};
    const mockBody = { test: 'test' };
    const expectedArgumentsForStore = {
      url: mockRequest.endpoint,
      data: mockBody,
      expiry: mockRequest.cache?.expiry
    };
    spyOn(service['apiDataStore'], 'add').and.callFake;

    service.storeRequest(mockRequest, mockBody);

    expect(service['apiDataStore'].add).toHaveBeenCalledWith(expectedArgumentsForStore);
  });
});
