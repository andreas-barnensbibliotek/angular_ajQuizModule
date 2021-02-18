import { AjquizModule } from './ajquiz.module';

describe('AjquizModule', () => {
  let ajquizModule: AjquizModule;

  beforeEach(() => {
    ajquizModule = new AjquizModule();
  });

  it('should create an instance', () => {
    expect(ajquizModule).toBeTruthy();
  });
});
