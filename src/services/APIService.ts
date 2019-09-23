export type KeyValue<T, U> = {
  key: T;
  value: U;
};

export type ApiMethod = "GET" | "POST";

export type Session = {
  email: string;
  password: string;
};

export type ApiCreateSession = {
  session: Session;
};

export class RequestBody<T> {
  constructor(private _requestBody: T) {}

  get requestBody(): T {
    return this._requestBody;
  }

  set requestBody(newRequestBody: T) {
    this._requestBody = newRequestBody;
  }
}

export class APIService {
  private _email: string = "";
  private _password: string = "";
  private _headers: string[][] = [];
  private _method: ApiMethod = "GET";

  constructor(_email: string, _password: string) {
    this._email = _email;
    this._password = _password;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get headers(): string[][] {
    return this._headers;
  }

  set email (newEmail: string) {
    this._email = newEmail;
  }

  set password (newPassword: string) {
    this._password = newPassword;
  }

  set method (newMethod: ApiMethod) {
    this._method = newMethod;
  }

  public setHeaders(headers: KeyValue<string, string>[]): APIService {
    for (const i in headers) {
      if (Object.prototype.hasOwnProperty.call(headers[i], 'key')
        && Object.prototype.hasOwnProperty.call(headers[i], 'value')) {
        this._headers.push( [headers[i].key, headers[i].value,] )
      }
    }
    return this;
  }

  public setMethod(newMethod: ApiMethod): APIService {
    this._method = newMethod;
    return this;
  }

  public resetHeaders(): void {
    this._headers = [];
  }

  public request<T> (body: T): RequestInit {
    return {
      headers: this._headers,
      method: this._method,
      body: JSON.stringify(body)
    };
  }
}
