const fs = require('fs')
const path = require('path');

exports.getData = (req, res) => {
	 // get Data
	try {
		let rawdata = fs.readFileSync(path.resolve(__dirname, '../../public/test.json'));
		let result = JSON.parse(rawdata);
		res.status(200).send({"result": result});
		
	} catch (error) {
		res.status(500).send({"message": error});
	}
}

exports.postData = (req, res) => {
	// post Data
   try {
		fs.exists(path.resolve(__dirname, '../../public/test.json'), function(exists) {
			if (exists) {
				console.log("file exists");
				fs.readFile(path.resolve(__dirname, '../../public/test.json'), function readFileCallback(err, data) {
					if (err) {
						console.log(err);
					} else {
						console.log('datanya', JSON.parse(data))
						var obj = JSON.parse(data);
						var dataArray = {
							"nama": req.body.nama,
							"alamat": req.body.alamat,
							"hp": req.body.hp,
							"hobi": req.body.hobi,
							"hp": req.body.hp,
							"jenis_kelamin" : req.body.jenis_kelamin
						};
						obj.push(dataArray);
						var strNotes = JSON.stringify(obj);
						fs.writeFile(path.resolve(__dirname, '../../public/test.json'),strNotes, function(err){
							if(err) return console.log(err);
							console.log('Note added');
						});
					}
				});
			} else {
				console.log("file not exists");
				let json = JSON.stringify(req.body);
				fs.writeFileSync(path.resolve(__dirname, '../../public/test.json'), `[${json}]`);
			}
		});
		res.status(200).send({"status": "ok", "message": 'insert data successfully'});
   } catch (error) {
		res.status(500).send({"message": error});
   }
}
