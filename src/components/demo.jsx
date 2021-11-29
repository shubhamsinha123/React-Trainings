import React from 'react';
import axios from 'axios';

class Demo extends React.Component{
  constructor(props)
  {
    super(props);
    const state = {
      monthly_text: [],
      herobanner_text_right: [],
    }
    this.state = state;
  }
  componentDidMount()
  {
    this.myFunc();
  }
  myFunc(){
    axios.get('https://dev-drupal.ameexdigital.com/api/homepage/1/section/5').then
    ((res) => console.log(res.data));
      // this.setState({
      //   monthly_text: res,
      //   herobanner_text_right: monthly[0].field_image_text,
      // })
    // })
    // .catch(error => { })
  }
  render()
  {
    return(
      <>
      <div>
        <h1>{this.state.monthly.field_banner_type}</h1>
      </div>
      </>
    )
  }
}
export default Demo
