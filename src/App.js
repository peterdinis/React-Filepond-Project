import React, {useState} from 'react'
import './App.css';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';
import FilePondPluginGetFile from 'filepond-plugin-get-file';
import 'filepond-plugin-get-file/dist/filepond-plugin-get-file.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginFilePoster, FilePondPluginImagePreview, FilePondPluginFileValidateSize, FilePondPluginGetFile, FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function App() {
    const [files, setFiles] = useState([]);

    return (
        <div className='App'>
            <h1>React Upload Files with Filepond</h1>
            <FilePond 
                        className='filepond'
                        files={files}
                        labelFileProcessing='Your files are uploading'
                        allowMultiple={true}
                        name='files'
                        dropValidation
                        allowFilePoster={false}
                        dropOnPage
                        allowDownloadByUrl={false}
                        labelMaxFileSizeExceeded="Uploaded file is to large"
                        onupdatefiles={setFiles} />
        </div>
    )
}

export default App;