const fileList = document.getElementById('fileList');

// List of files to be displayed for download
const files = [
    {name: 'File 1', url: 'file1.txt'},
    {name: 'File 2', url: 'file2.pdf'}
];

// Add files to the list
files.forEach(file => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = file.name;
    link.href = file.url;
    link.download = file.name;
    listItem.appendChild(link);
    fileList.appendChild(listItem);
});
