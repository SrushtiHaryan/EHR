import React, { Component } from "react";
import { Button, Card, Icon } from "antd";
import PopUp from "./popup";

class display_file extends Component {
  render() {
    let { fhash, filename, diplayImage, i } = this.props.props;
    let that = this.props.that;
    let imageLink = this.props.props.displayImage;
    // "https://ipfs.io/ipfs/QmSLXnNB3DFUVDQe5GUEvewRQH33xNGzRyxnXNEU1xmFv4"

    console.log(that);
    console.log(this.props.props);
    console.log(this.props.props.displayImage);
    console.log(this.props.props.fhash[2]);
    return (
      <div>
        <Card title={filename} bordered={true}>
          <h10>filehash: {fhash[2]}</h10>
          {/* <h4> */}
          {/* filetype:{" "} */}
          {/* {that.state.filesInfo[i] ? that.state.filesInfo[i][1] : null} */}
          {/* </h4> */}
          {/* <Button
            type="primary"
            // onClick={that.showFile.bind(that, fhash, true)}
          >
            <Icon type="file" />
            Show File
          </Button> */}
          {/* <PopUp */}
          {/* // showPopup={that.state.showPopup[i]} */}
          {/* // closePopup={that.showFile.bind(that, fhash, false)} */}
          {/* > */}
          {/* Downloading File */}
          {/* </PopUp> */}

          <img
            src={`https://ipfs.io/ipfs/${this.props.props.fhash[2]}`}
            width={400}
            // height={200}
          />
          {/* <h2>image link: {this.props.props.displayImage}</h2> */}
        </Card>
      </div>
    );
  }
}

const flexStyle = {
  display: "flex",
  flexDirection: "column",
};

export default display_file;
