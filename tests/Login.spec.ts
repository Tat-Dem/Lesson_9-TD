import { expect, test } from '@playwright/test'
import { LoginDTO } from './DTO/LoginDTO'
import { StatusCodes } from 'http-status-codes'

test.describe('Login tests', async () => {
  test('Succuessful authorization', async ({ request }) => {
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData()
    });

    expect(response.status()).toBe(StatusCodes.OK);

    const responseBody = await response.text();
    expect(responseBody).toContain('eyJ');

    const jwtRegex = /^eyJ[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$/;
    const match = responseBody.match(jwtRegex);
    expect(match).not.toBeNull();
    if (match) {
      const jwt = match[0];
      expect(jwt).toMatch(/^eyJ[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$/);
    }
  });
  test('Incorrect HTTP method', async ({ request }) => {
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData()
    });
    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED);
  });
  test('Unsuccessful authorization with GET method', async ({ request }) => {
    const response = await request.get('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData()
    });
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED);
  });
  test('Unsuccessful authorization with PUT method', async ({ request }) => {
    const response = await request.put('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData()
    });
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED);
  });
  test('Unsuccessful authorization with DELETE method', async ({ request }) => {
    const response = await request.delete('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData()
    });
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED);
  });

})
