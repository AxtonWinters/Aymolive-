// Expected Result : 
// [
//   { name: 'Rian Nugraha', school_name: 'PLMK-JKT' },
//   { name: 'Ari Santoso', school_name: 'GRSR-JKT' },
//   { name: 'Rahman Sunggara', school_name: 'GELM-JKT' },
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.

var source = [
  {id: "1", full_name: "Rian Nugraha", school: {id: "1", data: "PLMK-JKT"},},
  {id: "2", full_name: "Ari Santoso", school: { id: "1", data: "GRSR-JKT"},},
  {id: "3", full_name: "Rahman Sunggara", school: {id: "1",data: "GELM-JKT",},},
  {id: "4", full_name: "Rian Nugraha", school: {id: "2",data: "PLMK-BDG"},},
]
let test = [];

function result(source) {
	for (i=0; i < source.length;i++) {
  	if (source[i].school.id == 1) {
  		test.push(source[i]);
  	}
    console.log[i];
	}
}
result(source);
console.log(test);