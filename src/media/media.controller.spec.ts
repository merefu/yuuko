import { Test, TestingModule } from '@nestjs/testing';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';

describe('Media Controller', () => {
  let controller: MediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaController],
      providers: [MediaService],
    }).compile();

    controller = module.get<MediaController>(MediaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await controller.get(1)).toBe('Get 1');
    });
  });
});
