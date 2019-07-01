module.exports = {
    data: {
        city: {
            config: {
                // ATL
                0: [2, 2, 2, 2, 2, 5, 5, 5, 15, 15],

                // NYC
                1: [4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8],

                // CHI
                2: [1, 1, 1, 1, 9, 10, 10, 10, 11, 11],

                // SF
                3: [12, 13]
            }
        },
        buildings: {
            1: {
                base: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                body: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
                roof: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 5, 5, 5, 5, 5, 7, 7, 7, 7],
            },
            2: {
                base: [8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10],
                body: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
                // roof: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 4, 5, 5, 8, 8, 8, 8, 9, 9, 9], // FIXME
                roof: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 4, 5, 5, 7, 7, 7, 7, 7, 7, 7], // FIXME
            },
            4: {
                base: [7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10],
                body: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 5],
                roof: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 3, 5, 5, 6, 6, 7, 7],
            },
            5: {
                base: [8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                body: [0, 0, 0, 0, 0, 0, 1, 1, 1, 4, 4, 4, 5, 5, 5, 5, 8, 8, 8, 9],
                roof: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3],
            },
            6: {
                base: [6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9],
                body: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3],
                roof: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3],
            },
            7: {
                base: [3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11],
                body: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4],
                roof: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3],
            },
            8: {
                base: [6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 14],
                body: [0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7],
            },
            9: {
                base: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                body: [6, 7, 8, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15],
                roof: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4],
            },
            10: {
                base: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6, 6],
                body: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 5, 5, 5, 5, 6, 7],
                roof: [5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            },
            11: {
                base: [6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10, 11, 12, 12, 12, 13, 13, 13],
                body: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
                roof: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 6],
            },
            12: {
                base: [0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 5, 5, 5, 6, 6, 6, 6, 6],
                body: [11, 12, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 18, 18, 19, 20, 21],
                roof: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4],
            },
            13: {
                base: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                body: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 6, 7, 8, 8, 8],
                roof: [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 6, 6, 6],
            },
            15: {
                base: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8],
                body: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4],
                roof: [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 5, 5, 6, 6, 6, 7, 7, 7, 7],
            }
        }
    }
};
