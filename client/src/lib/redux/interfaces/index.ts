export interface IPromiseState {
  status: 'idle' | 'loading' | 'failed';
  message: string;
}
