const randomValuesObj = {
  1: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
	2: [
		[1, 1, 1, 1, 1, 1, 1, 3, 5, 5],
		[1, 1, 1, 1, 1, 1, 1, 4, 4, 5],
		[1, 1, 1, 1, 1, 1, 2, 2, 5, 5],
		[1, 1, 1, 1, 1, 1, 2, 3, 4, 5],
		[1, 1, 1, 1, 1, 1, 2, 4, 4, 4],
		[1, 1, 1, 1, 1, 1, 3, 3, 3, 5],
		[1, 1, 1, 1, 1, 1, 3, 3, 4, 4],
		[1, 1, 1, 1, 1, 2, 2, 2, 4, 5],
		[1, 1, 1, 1, 1, 2, 2, 3, 3, 5],
		[1, 1, 1, 1, 1, 2, 2, 3, 4, 4],
	],
	3: [
		[1, 1, 1, 1, 1, 5, 5, 5, 5, 5],
		[1, 1, 1, 1, 2, 4, 5, 5, 5, 5],
		[1, 1, 1, 1, 3, 3, 5, 5, 5, 5],
		[1, 1, 1, 1, 3, 4, 4, 5, 5, 5],
		[1, 1, 1, 1, 4, 4, 4, 4, 5, 5],
		[1, 1, 1, 2, 2, 3, 5, 5, 5, 5],
		[1, 1, 1, 2, 2, 4, 4, 5, 5, 5],
		[1, 1, 1, 2, 3, 3, 4, 5, 5, 5],
		[1, 1, 1, 2, 3, 4, 4, 4, 5, 5],
		[1, 1, 1, 2, 4, 4, 4, 4, 4, 5],
	],
	4: [
		[1, 1, 3, 5, 5, 5, 5, 5, 5, 5],
		[1, 1, 4, 4, 5, 5, 5, 5, 5, 5],
		[1, 2, 2, 5, 5, 5, 5, 5, 5, 5],
		[1, 2, 3, 4, 5, 5, 5, 5, 5, 5],
		[1, 2, 4, 4, 4, 5, 5, 5, 5, 5],
		[1, 3, 3, 3, 5, 5, 5, 5, 5, 5],
		[1, 3, 3, 4, 4, 5, 5, 5, 5, 5],
		[1, 3, 4, 4, 4, 4, 5, 5, 5, 5],
		[1, 4, 4, 4, 4, 4, 4, 5, 5, 5],
		[2, 2, 2, 4, 5, 5, 5, 5, 5, 5],
	],
	5: [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  ],
	1.1: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
  ],
	1.2: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
		[1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
	],
	1.3: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
		[1, 1, 1, 1, 1, 1, 1, 1, 2, 3],
		[1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
	],
	1.4: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 5],
		[1, 1, 1, 1, 1, 1, 1, 1, 2, 4],
		[1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
		[1, 1, 1, 1, 1, 1, 1, 2, 2, 3],
		[1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
	],
	1.5: [
		[1, 1, 1, 1, 1, 1, 1, 1, 2, 5],
		[1, 1, 1, 1, 1, 1, 1, 1, 3, 4],
		[1, 1, 1, 1, 1, 1, 1, 2, 2, 4],
		[1, 1, 1, 1, 1, 1, 1, 2, 3, 3],
		[1, 1, 1, 1, 1, 1, 2, 2, 2, 3],
		[1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
	],
	1.6: [
		[1, 1, 1, 1, 1, 1, 1, 1, 3, 5],
		[1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
		[1, 1, 1, 1, 1, 1, 1, 2, 2, 5],
		[1, 1, 1, 1, 1, 1, 1, 2, 3, 4],
		[1, 1, 1, 1, 1, 1, 1, 3, 3, 3],
		[1, 1, 1, 1, 1, 1, 2, 2, 2, 4],
		[1, 1, 1, 1, 1, 1, 2, 2, 3, 3],
		[1, 1, 1, 1, 1, 2, 2, 2, 2, 3],
		[1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
	],
	1.7: [
		[1, 1, 1, 1, 1, 1, 1, 1, 4, 5],
		[1, 1, 1, 1, 1, 1, 1, 2, 3, 5],
		[1, 1, 1, 1, 1, 1, 1, 2, 4, 4],
		[1, 1, 1, 1, 1, 1, 1, 3, 3, 4],
		[1, 1, 1, 1, 1, 1, 2, 2, 2, 5],
		[1, 1, 1, 1, 1, 1, 2, 2, 3, 4],
		[1, 1, 1, 1, 1, 1, 2, 3, 3, 3],
		[1, 1, 1, 1, 1, 2, 2, 2, 2, 4],
		[1, 1, 1, 1, 1, 2, 2, 2, 3, 3],
		[1, 1, 1, 1, 2, 2, 2, 2, 2, 3],
	],
	1.8: [
		[1, 1, 1, 1, 1, 1, 1, 1, 5, 5],
		[1, 1, 1, 1, 1, 1, 1, 2, 4, 5],
		[1, 1, 1, 1, 1, 1, 1, 3, 3, 5],
		[1, 1, 1, 1, 1, 1, 1, 3, 4, 4],
		[1, 1, 1, 1, 1, 1, 2, 2, 3, 5],
		[1, 1, 1, 1, 1, 1, 2, 2, 4, 4],
		[1, 1, 1, 1, 1, 1, 2, 3, 3, 4],
		[1, 1, 1, 1, 1, 1, 3, 3, 3, 3],
		[1, 1, 1, 1, 1, 2, 2, 2, 2, 5],
		[1, 1, 1, 1, 1, 2, 2, 2, 3, 4],
	],
	1.9: [
		[1, 1, 1, 1, 1, 1, 1, 2, 5, 5],
		[1, 1, 1, 1, 1, 1, 1, 3, 4, 5],
		[1, 1, 1, 1, 1, 1, 1, 4, 4, 4],
		[1, 1, 1, 1, 1, 1, 2, 2, 4, 5],
		[1, 1, 1, 1, 1, 1, 2, 3, 3, 5],
		[1, 1, 1, 1, 1, 1, 2, 3, 4, 4],
		[1, 1, 1, 1, 1, 1, 3, 3, 3, 4],
		[1, 1, 1, 1, 1, 2, 2, 2, 3, 5],
		[1, 1, 1, 1, 1, 2, 2, 2, 4, 4],
		[1, 1, 1, 1, 1, 2, 2, 3, 3, 4],
	],
	2.1: [
		[1, 1, 1, 1, 1, 1, 1, 4, 5, 5],
		[1, 1, 1, 1, 1, 1, 2, 3, 5, 5],
		[1, 1, 1, 1, 1, 1, 2, 4, 4, 5],
		[1, 1, 1, 1, 1, 1, 3, 3, 4, 5],
		[1, 1, 1, 1, 1, 1, 3, 4, 4, 4],
		[1, 1, 1, 1, 1, 2, 2, 2, 5, 5],
		[1, 1, 1, 1, 1, 2, 2, 3, 4, 5],
		[1, 1, 1, 1, 1, 2, 2, 4, 4, 4],
		[1, 1, 1, 1, 1, 2, 3, 3, 3, 5],
		[1, 1, 1, 1, 1, 2, 3, 3, 4, 4],
	],
	2.2: [
		[1, 1, 1, 1, 1, 1, 1, 5, 5, 5],
		[1, 1, 1, 1, 1, 1, 2, 4, 5, 5],
		[1, 1, 1, 1, 1, 1, 3, 3, 5, 5],
		[1, 1, 1, 1, 1, 1, 3, 4, 4, 5],
		[1, 1, 1, 1, 1, 1, 4, 4, 4, 4],
		[1, 1, 1, 1, 1, 2, 2, 3, 5, 5],
		[1, 1, 1, 1, 1, 2, 2, 4, 4, 5],
		[1, 1, 1, 1, 1, 2, 3, 3, 4, 5],
		[1, 1, 1, 1, 1, 2, 3, 4, 4, 4],
		[1, 1, 1, 1, 1, 3, 3, 3, 3, 5],
	],
	2.3: [
		[1, 1, 1, 1, 1, 1, 2, 5, 5, 5],
		[1, 1, 1, 1, 1, 1, 3, 4, 5, 5],
		[1, 1, 1, 1, 1, 1, 4, 4, 4, 5],
		[1, 1, 1, 1, 1, 2, 2, 4, 5, 5],
		[1, 1, 1, 1, 1, 2, 3, 3, 5, 5],
		[1, 1, 1, 1, 1, 2, 3, 4, 4, 5],
		[1, 1, 1, 1, 1, 2, 4, 4, 4, 4],
		[1, 1, 1, 1, 1, 3, 3, 3, 4, 5],
		[1, 1, 1, 1, 1, 3, 3, 4, 4, 4],
		[1, 1, 1, 1, 2, 2, 2, 3, 5, 5],
	],
	2.4: [
		[1, 1, 1, 1, 1, 1, 3, 5, 5, 5],
		[1, 1, 1, 1, 1, 1, 4, 4, 5, 5],
		[1, 1, 1, 1, 1, 2, 2, 5, 5, 5],
		[1, 1, 1, 1, 1, 2, 3, 4, 5, 5],
		[1, 1, 1, 1, 1, 2, 4, 4, 4, 5],
		[1, 1, 1, 1, 1, 3, 3, 3, 5, 5],
		[1, 1, 1, 1, 1, 3, 3, 4, 4, 5],
		[1, 1, 1, 1, 1, 3, 4, 4, 4, 4],
		[1, 1, 1, 1, 2, 2, 2, 4, 5, 5],
		[1, 1, 1, 1, 2, 2, 3, 3, 5, 5],
	],
	2.5: [
		[1, 1, 1, 1, 1, 1, 4, 5, 5, 5],
		[1, 1, 1, 1, 1, 2, 3, 5, 5, 5],
		[1, 1, 1, 1, 1, 2, 4, 4, 5, 5],
		[1, 1, 1, 1, 1, 3, 3, 4, 5, 5],
		[1, 1, 1, 1, 1, 3, 4, 4, 4, 5],
		[1, 1, 1, 1, 1, 4, 4, 4, 4, 4],
		[1, 1, 1, 1, 2, 2, 2, 5, 5, 5],
		[1, 1, 1, 1, 2, 2, 3, 4, 5, 5],
		[1, 1, 1, 1, 2, 2, 4, 4, 4, 5],
		[1, 1, 1, 1, 2, 3, 3, 3, 5, 5],
	],
	2.6: [
		[1, 1, 1, 1, 1, 1, 5, 5, 5, 5],
		[1, 1, 1, 1, 1, 2, 4, 5, 5, 5],
		[1, 1, 1, 1, 1, 3, 3, 5, 5, 5],
		[1, 1, 1, 1, 1, 3, 4, 4, 5, 5],
		[1, 1, 1, 1, 1, 4, 4, 4, 4, 5],
		[1, 1, 1, 1, 2, 2, 3, 5, 5, 5],
		[1, 1, 1, 1, 2, 2, 4, 4, 5, 5],
		[1, 1, 1, 1, 2, 3, 3, 4, 5, 5],
		[1, 1, 1, 1, 2, 3, 4, 4, 4, 5],
		[1, 1, 1, 1, 2, 4, 4, 4, 4, 4],
	],
	2.7: [
		[1, 1, 1, 1, 1, 2, 5, 5, 5, 5],
		[1, 1, 1, 1, 1, 3, 4, 5, 5, 5],
		[1, 1, 1, 1, 1, 4, 4, 4, 5, 5],
		[1, 1, 1, 1, 2, 2, 4, 5, 5, 5],
		[1, 1, 1, 1, 2, 3, 3, 5, 5, 5],
		[1, 1, 1, 1, 2, 3, 4, 4, 5, 5],
		[1, 1, 1, 1, 2, 4, 4, 4, 4, 5],
		[1, 1, 1, 1, 3, 3, 3, 4, 5, 5],
		[1, 1, 1, 1, 3, 3, 4, 4, 4, 5],
		[1, 1, 1, 1, 3, 4, 4, 4, 4, 4],
	],
	2.8: [
		[1, 1, 1, 1, 1, 3, 5, 5, 5, 5],
		[1, 1, 1, 1, 1, 4, 4, 5, 5, 5],
		[1, 1, 1, 1, 2, 2, 5, 5, 5, 5],
		[1, 1, 1, 1, 2, 3, 4, 5, 5, 5],
		[1, 1, 1, 1, 2, 4, 4, 4, 5, 5],
		[1, 1, 1, 1, 3, 3, 3, 5, 5, 5],
		[1, 1, 1, 1, 3, 3, 4, 4, 5, 5],
		[1, 1, 1, 1, 3, 4, 4, 4, 4, 5],
		[1, 1, 1, 1, 4, 4, 4, 4, 4, 4],
		[1, 1, 1, 2, 2, 2, 4, 5, 5, 5],
	],
	2.9: [
		[1, 1, 1, 1, 1, 4, 5, 5, 5, 5],
		[1, 1, 1, 1, 2, 3, 5, 5, 5, 5],
		[1, 1, 1, 1, 2, 4, 4, 5, 5, 5],
		[1, 1, 1, 1, 3, 3, 4, 5, 5, 5],
		[1, 1, 1, 1, 3, 4, 4, 4, 5, 5],
		[1, 1, 1, 1, 4, 4, 4, 4, 4, 5],
		[1, 1, 1, 2, 2, 2, 5, 5, 5, 5],
		[1, 1, 1, 2, 2, 3, 4, 5, 5, 5],
		[1, 1, 1, 2, 2, 4, 4, 4, 5, 5],
		[1, 1, 1, 2, 3, 3, 3, 5, 5, 5],
	],
	3.1: [
		[1, 1, 1, 1, 2, 5, 5, 5, 5, 5],
		[1, 1, 1, 1, 3, 4, 5, 5, 5, 5],
		[1, 1, 1, 1, 4, 4, 4, 5, 5, 5],
		[1, 1, 1, 2, 2, 4, 5, 5, 5, 5],
		[1, 1, 1, 2, 3, 3, 5, 5, 5, 5],
		[1, 1, 1, 2, 3, 4, 4, 5, 5, 5],
		[1, 1, 1, 2, 4, 4, 4, 4, 5, 5],
		[1, 1, 1, 3, 3, 3, 4, 5, 5, 5],
		[1, 1, 1, 3, 3, 4, 4, 4, 5, 5],
		[1, 1, 1, 3, 4, 4, 4, 4, 4, 5],
	],
	3.2: [
		[1, 1, 1, 1, 3, 5, 5, 5, 5, 5],
		[1, 1, 1, 1, 4, 4, 5, 5, 5, 5],
		[1, 1, 1, 2, 2, 5, 5, 5, 5, 5],
		[1, 1, 1, 2, 3, 4, 5, 5, 5, 5],
		[1, 1, 1, 2, 4, 4, 4, 5, 5, 5],
		[1, 1, 1, 3, 3, 3, 5, 5, 5, 5],
		[1, 1, 1, 3, 3, 4, 4, 5, 5, 5],
		[1, 1, 1, 3, 4, 4, 4, 4, 5, 5],
		[1, 1, 1, 4, 4, 4, 4, 4, 4, 5],
		[1, 1, 2, 2, 2, 4, 5, 5, 5, 5],
	],
	3.3: [
		[1, 1, 1, 1, 4, 5, 5, 5, 5, 5],
		[1, 1, 1, 2, 3, 5, 5, 5, 5, 5],
		[1, 1, 1, 2, 4, 4, 5, 5, 5, 5],
		[1, 1, 1, 3, 3, 4, 5, 5, 5, 5],
		[1, 1, 1, 3, 4, 4, 4, 5, 5, 5],
		[1, 1, 1, 4, 4, 4, 4, 4, 5, 5],
		[1, 1, 2, 2, 2, 5, 5, 5, 5, 5],
		[1, 1, 2, 2, 3, 4, 5, 5, 5, 5],
		[1, 1, 2, 2, 4, 4, 4, 5, 5, 5],
		[1, 1, 2, 3, 3, 3, 5, 5, 5, 5],
	],
	3.4: [
		[1, 1, 1, 1, 5, 5, 5, 5, 5, 5],
		[1, 1, 1, 2, 4, 5, 5, 5, 5, 5],
		[1, 1, 1, 3, 3, 5, 5, 5, 5, 5],
		[1, 1, 1, 3, 4, 4, 5, 5, 5, 5],
		[1, 1, 1, 4, 4, 4, 4, 5, 5, 5],
		[1, 1, 2, 2, 3, 5, 5, 5, 5, 5],
		[1, 1, 2, 2, 4, 4, 5, 5, 5, 5],
		[1, 1, 2, 3, 3, 4, 5, 5, 5, 5],
		[1, 1, 2, 3, 4, 4, 4, 5, 5, 5],
		[1, 1, 2, 4, 4, 4, 4, 4, 5, 5],
	],
	3.5: [
		[1, 1, 1, 2, 5, 5, 5, 5, 5, 5],
		[1, 1, 1, 3, 4, 5, 5, 5, 5, 5],
		[1, 1, 1, 4, 4, 4, 5, 5, 5, 5],
		[1, 1, 2, 2, 4, 5, 5, 5, 5, 5],
		[1, 1, 2, 3, 3, 5, 5, 5, 5, 5],
		[1, 1, 2, 3, 4, 4, 5, 5, 5, 5],
		[1, 1, 2, 4, 4, 4, 4, 5, 5, 5],
		[1, 1, 3, 3, 3, 4, 5, 5, 5, 5],
		[1, 1, 3, 3, 4, 4, 4, 5, 5, 5],
		[1, 1, 3, 4, 4, 4, 4, 4, 5, 5],
	],
	3.6: [
		[1, 1, 1, 3, 5, 5, 5, 5, 5, 5],
		[1, 1, 1, 4, 4, 5, 5, 5, 5, 5],
		[1, 1, 2, 2, 5, 5, 5, 5, 5, 5],
		[1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
		[1, 1, 2, 4, 4, 4, 5, 5, 5, 5],
		[1, 1, 3, 3, 3, 5, 5, 5, 5, 5],
		[1, 1, 3, 3, 4, 4, 5, 5, 5, 5],
		[1, 1, 3, 4, 4, 4, 4, 5, 5, 5],
		[1, 1, 4, 4, 4, 4, 4, 4, 5, 5],
		[1, 2, 2, 2, 4, 5, 5, 5, 5, 5],
	],
	3.7: [
		[1, 1, 1, 4, 5, 5, 5, 5, 5, 5],
		[1, 1, 2, 3, 5, 5, 5, 5, 5, 5],
		[1, 1, 2, 4, 4, 5, 5, 5, 5, 5],
		[1, 1, 3, 3, 4, 5, 5, 5, 5, 5],
		[1, 1, 3, 4, 4, 4, 5, 5, 5, 5],
		[1, 1, 4, 4, 4, 4, 4, 5, 5, 5],
		[1, 2, 2, 2, 5, 5, 5, 5, 5, 5],
		[1, 2, 2, 3, 4, 5, 5, 5, 5, 5],
		[1, 2, 2, 4, 4, 4, 5, 5, 5, 5],
		[1, 2, 3, 3, 3, 5, 5, 5, 5, 5],
	],
	3.8: [
		[1, 1, 1, 5, 5, 5, 5, 5, 5, 5],
		[1, 1, 2, 4, 5, 5, 5, 5, 5, 5],
		[1, 1, 3, 3, 5, 5, 5, 5, 5, 5],
		[1, 1, 3, 4, 4, 5, 5, 5, 5, 5],
		[1, 1, 4, 4, 4, 4, 5, 5, 5, 5],
		[1, 2, 2, 3, 5, 5, 5, 5, 5, 5],
		[1, 2, 2, 4, 4, 5, 5, 5, 5, 5],
		[1, 2, 3, 3, 4, 5, 5, 5, 5, 5],
		[1, 2, 3, 4, 4, 4, 5, 5, 5, 5],
		[1, 2, 4, 4, 4, 4, 4, 5, 5, 5],
	],
	3.9: [
		[1, 1, 2, 5, 5, 5, 5, 5, 5, 5],
		[1, 1, 3, 4, 5, 5, 5, 5, 5, 5],
		[1, 1, 4, 4, 4, 5, 5, 5, 5, 5],
		[1, 2, 2, 4, 5, 5, 5, 5, 5, 5],
		[1, 2, 3, 3, 5, 5, 5, 5, 5, 5],
		[1, 2, 3, 4, 4, 5, 5, 5, 5, 5],
		[1, 2, 4, 4, 4, 4, 5, 5, 5, 5],
		[1, 3, 3, 3, 4, 5, 5, 5, 5, 5],
		[1, 3, 3, 4, 4, 4, 5, 5, 5, 5],
		[1, 3, 4, 4, 4, 4, 4, 5, 5, 5],
	],
	4.1: [
		[1, 1, 4, 5, 5, 5, 5, 5, 5, 5],
		[1, 2, 3, 5, 5, 5, 5, 5, 5, 5],
		[1, 2, 4, 4, 5, 5, 5, 5, 5, 5],
		[1, 3, 3, 4, 5, 5, 5, 5, 5, 5],
		[1, 3, 4, 4, 4, 5, 5, 5, 5, 5],
		[1, 4, 4, 4, 4, 4, 5, 5, 5, 5],
		[2, 2, 2, 5, 5, 5, 5, 5, 5, 5],
		[2, 2, 3, 4, 5, 5, 5, 5, 5, 5],
		[2, 2, 4, 4, 4, 5, 5, 5, 5, 5],
		[2, 3, 3, 3, 5, 5, 5, 5, 5, 5],
	],
	4.2: [
		[1, 1, 5, 5, 5, 5, 5, 5, 5, 5],
		[1, 2, 4, 5, 5, 5, 5, 5, 5, 5],
		[1, 3, 3, 5, 5, 5, 5, 5, 5, 5],
		[1, 3, 4, 4, 5, 5, 5, 5, 5, 5],
		[1, 4, 4, 4, 4, 5, 5, 5, 5, 5],
		[2, 2, 3, 5, 5, 5, 5, 5, 5, 5],
		[2, 2, 4, 4, 5, 5, 5, 5, 5, 5],
		[2, 3, 3, 4, 5, 5, 5, 5, 5, 5],
		[2, 3, 4, 4, 4, 5, 5, 5, 5, 5],
		[2, 4, 4, 4, 4, 4, 5, 5, 5, 5],
	],
	4.3: [
		[1, 2, 5, 5, 5, 5, 5, 5, 5, 5],
		[1, 3, 4, 5, 5, 5, 5, 5, 5, 5],
		[1, 4, 4, 4, 5, 5, 5, 5, 5, 5],
		[2, 2, 4, 5, 5, 5, 5, 5, 5, 5],
		[2, 3, 3, 5, 5, 5, 5, 5, 5, 5],
		[2, 3, 4, 4, 5, 5, 5, 5, 5, 5],
		[2, 4, 4, 4, 4, 5, 5, 5, 5, 5],
		[3, 3, 3, 4, 5, 5, 5, 5, 5, 5],
		[3, 3, 4, 4, 4, 5, 5, 5, 5, 5],
		[3, 4, 4, 4, 4, 4, 5, 5, 5, 5],
	],
	4.4: [
		[1, 3, 5, 5, 5, 5, 5, 5, 5, 5],
		[1, 4, 4, 5, 5, 5, 5, 5, 5, 5],
		[2, 2, 5, 5, 5, 5, 5, 5, 5, 5],
		[2, 3, 4, 5, 5, 5, 5, 5, 5, 5],
		[2, 4, 4, 4, 5, 5, 5, 5, 5, 5],
		[3, 3, 3, 5, 5, 5, 5, 5, 5, 5],
		[3, 3, 4, 4, 5, 5, 5, 5, 5, 5],
		[3, 4, 4, 4, 4, 5, 5, 5, 5, 5],
		[4, 4, 4, 4, 4, 4, 5, 5, 5, 5],
	],
	4.5: [
		[1, 4, 5, 5, 5, 5, 5, 5, 5, 5],
		[2, 3, 5, 5, 5, 5, 5, 5, 5, 5],
		[2, 4, 4, 5, 5, 5, 5, 5, 5, 5],
		[3, 3, 4, 5, 5, 5, 5, 5, 5, 5],
		[3, 4, 4, 4, 5, 5, 5, 5, 5, 5],
		[4, 4, 4, 4, 4, 5, 5, 5, 5, 5],
	],
	4.6: [
		[1, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[2, 4, 5, 5, 5, 5, 5, 5, 5, 5],
		[3, 3, 5, 5, 5, 5, 5, 5, 5, 5],
		[3, 4, 4, 5, 5, 5, 5, 5, 5, 5],
		[4, 4, 4, 4, 5, 5, 5, 5, 5, 5],
	],
	4.7: [
		[2, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[3, 4, 5, 5, 5, 5, 5, 5, 5, 5],
		[4, 4, 4, 5, 5, 5, 5, 5, 5, 5],
	],
	4.8: [
		[3, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[4, 4, 5, 5, 5, 5, 5, 5, 5, 5],
	],
	4.9: [
    [4, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  ],
}
