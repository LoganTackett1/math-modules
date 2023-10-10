There are two types of functions in these modules:
    Base functions ( example VectorF.add() )
    and Mutate functions ( example VectorF.addMut() )

They do the same thing in terms of return value, base functions are FUNCTIONAL, they do NOT mutate objects.

Mutate (Mut) functions ALWAYS mutate the FIRST parameter of the function.

Both exist because there are performance use cases for both.

Vectors are simply arrays, Matricies are arrays of arrays, simple as that.