import { TestBed } from '@angular/core/testing';

import { ChatOpenAiService } from './chat-open-ai.service';

describe('ChatOpenAiService', () => {
  let service: ChatOpenAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatOpenAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
