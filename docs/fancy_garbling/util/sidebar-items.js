initSidebarItems({"constant":[["NPRIMES","Number of primes supported by our library."],["PRIMES","Primes used in fancy garbling."],["PRIMES_SKIP_2","Primes skipping the modulus 2, which allows certain gadgets."]],"fn":[["as_base_q","Convert a u128 into base q."],["as_base_q_u128","Convert a u128 into base q."],["as_mixed_radix","Convert a u128 into mixed radix form with the provided radii."],["base_modulus_with_width","Generate a CRT modulus that support at least n-bit integers, using provided primes."],["base_primes_with_width","Generate the factors of a CRT modulus that support at least n-bit integers, using provided primes."],["base_q_add","Add two base q numbers together."],["base_q_add_eq","Add a base q number into the first one."],["bytes_to_u128","Convert bytes to u128."],["crt","Compute the CRT representation of x with respect to the primes ps."],["crt_factor","Compute the CRT representation of x with respect to the factorization of q."],["crt_inv","Compute the value x given a list of CRT primes and residues."],["crt_inv_factor","Compute the value x given a composite CRT modulus."],["digits_per_u128","Determine how many mod q digits fit into a u128."],["factor","Factor using the primes in the global `PRIMES` array. Fancy garbling only supports composites with small prime factors."],["from_base_q","Convert little-endian base q digits into u128."],["from_mixed_radix","Convert little-endian mixed radix digits into u128."],["inv","Invert a mod m."],["inv_ref","Generic algorithm to invert inp_a mod inp_b. As ref so as to support BigInts without copying."],["is_power_of_2","Returns true if x is a power of 2. Delightfully generic."],["modulus_with_width","Generate a CRT modulus that support at least n-bit integers, using the built-in PRIMES."],["modulus_with_width_skip2","Generate a CRT modulus that support at least n-bit integers, using the built-in PRIMES_SKIP_2 (does not include 2 as a factor)."],["powm","Raise a u16 to a power mod some value."],["primes_with_width","Generate the factors of a CRT modulus that support at least n-bit integers, using the built-in PRIMES."],["product","Compute the product of some u16s as a u128."],["u128_from_bits","Convert into a u128 from the \"bits\" as u16. Assumes each \"bit\" is 0 or 1."],["u128_to_bits","Get the bits of a u128 encoded in 128 u16s, which is convenient for the rest of the library, which uses u16 as the base digit type in Wire."],["u128_to_bytes","Convert a u128 into bytes."]],"trait":[["RngExt","Extra Rng functionality, useful for `fancy-garbling`."]]});