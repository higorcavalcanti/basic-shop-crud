export class Response<T> {
  data?: T;
  hasError?: boolean;
  errorMessage?: string;
}
