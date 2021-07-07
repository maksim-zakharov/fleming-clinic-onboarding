const fs = require('fs');
const archiver = require('archiver');

var output = fs.createWriteStream('./fleming-hotel-onboarding.zip');
var archive = archiver('zip', {
  gzip: true,
  zlib: { level: 0 }, // Sets the compression level.
});

archive.on('error', function (err) {
  throw err;
});

// pipe archive data to the output file
archive.pipe(output);

// append files
archive.file('/.ebextensions', { name: '/.ebextensions' });
archive.file('/node_modules', { name: '/node_modules' });
archive.file('/dist', { name: '/dist' });
archive.file('/Procfile', { name: '/Procfile' });
archive.file('/package.json', { name: '/package.json' });

//
archive.finalize();
