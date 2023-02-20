# totp-words

[![Deploy](https://github.com/thegriglat/totp-words/workflows/build/badge.svg)](https://github.com/thegriglat/totp-words/actions)
[![Coverage Status](https://coveralls.io/repos/github/thegriglat/totp-words/badge.svg?branch=master)](https://coveralls.io/github/thegriglat/totp-words?branch=master)

TOTP but with PGP word list. Inspired by [base256](https://crates.io/crates/base256)

# Installation

```sh
npm i totp-words
```

# Idea

This project provides a similar functionality like usual TOTP but with [PGP word list](https://en.wikipedia.org/wiki/PGP_word_list).

# Usage

```typescript
import { encode, verify } from 'totp-words';
```

Default time interval is **30 seconds**.

```typescript
const secretKey = "my-awesome-secret";

const words = encode(secretKey)

const isValid = verify(words, secretKey)
```

Custom time interval can be used:

```typescript
const secretKey = "my-awesome-secret";

const options = new TOTPOptions(60)
// or
const options = {
    timeInterval: 60
};

const words = encode(secretKey, options)

const isValid = verify(words, secretKey, options)
```

---
This project is [MIT Licensed](LICENSE).
