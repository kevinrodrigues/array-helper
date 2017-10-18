/* global expect, spyOn, it, describe */

const arrayHelper = require('../src/index');

describe('`arrayHelper` library', () => {
    describe('`flatten` method', () => {
        it('should exist', () => {
            expect(arrayHelper.flatten).toBeDefined();
        });

        describe('when invoked', () => {
            it('should `return` a flattened array', () => {
                const array = [1, 3, 10, [5]];
                const flattenMe = arrayHelper.flatten(array);
                const toEqualArray = [1, 3, 10, 5];

                expect(flattenMe).toEqual(toEqualArray);
            });

            describe('when invoked with a boolean value `TRUE`', () => {
                it('should `return` a deeply nested array flattened', () => {
                    const deeplyNested = [1, 3, 100, [[30, [50], 60, 80]]];
                    const flattenDeepArray = arrayHelper.flatten(deeplyNested, true);
                    const toEqualArray = [1, 3, 100, 30, 50, 60, 80];

                    expect(flattenDeepArray).toEqual(toEqualArray);
                });
            });
        });
    });

    describe('`filter` method', () => {
        it('should exist', () => {
            expect(arrayHelper.filter).toBeDefined();
        });

        describe('when invoked', () => {
            describe('WITHOUT a `filter` parameter passed', () => {
                it('should `return` back the original array', () => {
                    const returnedArray = [1, 3, 100, 40];
                    const filterArray = arrayHelper.filter(returnedArray);

                    expect(filterArray).toEqual(returnedArray);
                });
            });

            describe('WITH a `filter` parameter passed', () => {
                it('should `return` back a filtered array when a filter value is passed', () => {
                    const array = [1, 3, 100, 40];
                    const returnedArray = [1, 3, 100];
                    const filterArray = arrayHelper.filter(array, 40);

                    expect(filterArray).toEqual(returnedArray);
                });

                it('should `return` back the same array if the filter value is not present in the array set', () => {
                    const array = [1, 3, 100, 40];
                    const returnedArray = [1, 3, 100, 40];
                    const filterArray = arrayHelper.filter(array, 555);

                    expect(filterArray).toEqual(returnedArray);
                });
            });

            describe('when a array contains nested array items AND the parameter `deep` is set to `TRUE`', () => {
                it('should return a `flatten` and filtered array set', () => {
                    const deeplyNested = [1, 3, 100, [[[50]]]];
                    const returnedArray = [1, 3, 100];
                    const filterArray = arrayHelper.filter(deeplyNested, 50, true);

                    expect(filterArray).toEqual(returnedArray);
                });
            });
        });
    });

    describe('`compact` method', () => {
        it('should exist', () => {
            expect(arrayHelper.compact).toBeDefined();
        });

        describe('when invoked', () => {
            describe('when the array contains `FALSY` values', () => {
                it('should `return` an array with `ALL` falsy values removed', () => {
                    const arrayItems = [1, 3, 0, null];
                    const compactArray = arrayHelper.compact(arrayItems);
                    const returnedArray = [1, 3];

                    expect(compactArray).toEqual(returnedArray);
                });
            });

            describe('when the array contains no `FALSY` values', () => {
                it('should `return` the original array set', () => {
                    const arrayItems = [1, 2, 3, 10];
                    const compactArray = arrayHelper.compact(arrayItems);

                    expect(compactArray).toEqual(arrayItems);
                });
            });
        });
    });

    describe('`partial`, method', () => {
        it('should exist', () => {
            expect(arrayHelper.partial).toBeDefined();
        });

        describe('when invoked', () => {
            describe('`AND` the first parameter `func` is `NOT` a valid function object', () => {
                it('should `throw` an `EXCEPTION`', () => {
                    const arrayItems = [1, 2, 3];
                    const fakeMethod = 'I really wish I was a real function';

                    expect(() => {
                        arrayHelper.partial(fakeMethod, arrayItems);
                    }).toThrow();
                });
            });

            describe('`AND` the first parameter `func` `IS` a valid function object', () => {
                it('should `NOT` throw', () => {
                    const realMethod = () => {};
                    const arrayItems = [1, 2, 3];

                    expect(() => {
                        arrayHelper.partial(realMethod, arrayItems);
                    }).not.toThrow();
                });

                it('should invoke the `APPLY` method on the `func` passed in', () => {
                    const arrayItems = [1, 2, 3];
                    const realMethod = () => {};

                    spyOn(realMethod, 'apply');

                    arrayHelper.partial(realMethod, arrayItems);

                    expect(realMethod.apply).toHaveBeenCalledWith(
                        this,
                        arrayItems
                    );
                });
            });
        });
    });
});
