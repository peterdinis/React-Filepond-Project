import React, {Component} from 'react'
import './App.css';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginGetFile from 'filepond-plugin-get-file';
import 'filepond-plugin-get-file/dist/filepond-plugin-get-file.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImagePreview, FilePondPluginGetFile, FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        /*   files: [{
              source: 'index.html',
              options: {
                  type: 'local'
              }
          }] */
      };
  }
  
  handleInit() {
      console.log('FilePond instance has initialised', this.pond);
  }

  render() {
      return (
          <div className="App">
              <h1>React Upload Files with Filepond</h1>
              {/* Pass FilePond properties as attributes */}
              <FilePond 
                        className='filepond'
                        ref={ref => this.pond = ref}
                        files={this.state.files}
                        allowMultiple={true}
                        allowDownloadByUrl={false}
                        oninit={() => this.handleInit() }
                        onupdatefiles={(fileItems) => {
                            // Set current file objects to this.state
                            this.setState({
                                files: fileItems.map(fileItem => fileItem.file)
                            });
                        }}>
              </FilePond>

          </div>
      );
  }
}

export default App;