export class HttpResponse<T> {
  data?: T;
  hasError?: boolean;
  errorMessage?: string;
}
