Checklist endpoint PUT / test-orders/{id}

| # | Name of test | Expected Response Code | Test data | Status |

| 1 | Successful order update with valid API key and id | 200 (OK) | 1, 2, 6, 9, 10 | Passed |
| 2 | Unsuccessful update of order with valid API key and invalid id | 400 (Bad Request) | 0, 11 | Passed |
| 3 | Unsuccessful update of order with missing API key | 401 (Unauthorized) | | Failed |
| 4 | Unsuccessful update of order with invalid API key | 401 (Unauthorized) | | Passed |
| 5 | Unsuccessful update of order with missing order ID | 400 (Bad Request) | | Failed |
| 6 | Unsuccessful update of order with invalid order data | 400 (Bad Request) | | Failed |
| 7 | Unsuccessful update of order with empty request body | 400 (Bad Request) | | Failed |

Checklist endpoint DELETE / test-orders/{id}

| # | Name of test | Expected Response Code | Test data | Status |

| 1 | Successfully deleting an existing order with a correct id and valid API key | 204 (No Content) | 1, 2, 6, 9, 10 | Passed |
| 2 | Unsuccessfully deleting a non-existent order with a valid API key | 400 (Bad Request) | 0, 11 | Passed |
| 3 | Unsuccessfully deleting an order with a valid API key and invalid id | 400 (Bad Request) | | Passed |
| 4 | Unsuccessful deletion of order with invalid API key | 401 (Unauthorized) | | Passed |
| 5 | Unsuccessful order deletion with missing API key | 400 (Bad Request) | | Passed |

Checklist endpoint Get / test-orders

| # | Name of test | Expected Response Code | Status |

| 1 | Successful retrieval of order list with valid authentication | 200 (OK) | Passed |
| 2 | Unsuccessful retrieval of order list with invalid credentials | 400 (Bad Request) | Failed |
| 3 | Unsuccessful retrieval of order list with missing credentials | 400 (Bad Request) | Passed |
| 4 | Rate limiting: Too many requests within a short time frame | 429 (Too many requests)| Failed |
