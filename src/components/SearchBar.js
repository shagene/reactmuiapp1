import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // handleInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = {
    term: "",
    term2: "",
  };

  onFormSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(...[this.state.term, this.state.term2]);

    // this.props.onSubmit(this.state.term);
    // this.props.onSubmit(this.state.term2);
  }

  render() {
    return (
      <>
        <Box
          component='form'
          sx={{
            m: 1.5,
          }}>
          <FormControl style={{ width: "100%" }}>
            <TextField
              onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
              id='searchImage'
              label='Search Image'
              variant='outlined'
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </FormControl>
        </Box>
        <Box
          component='form'
          sx={{
            m: 1.5,
          }}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel htmlFor='image-search'>Image Search</InputLabel>
            <Input
              id='image-search'
              aria-describedby='my-helper-text'
              value={this.state.term2}
              onKeyPress={(e) => e.key === "Enter" && this.onFormSubmit(e)}
              onChange={(e) => this.setState({ term2: e.target.value })}
            />
            <FormHelperText id='my-helper-text'>
              Search for an image
            </FormHelperText>
          </FormControl>
        </Box>
      </>
    );
  }
}

export default SearchBar;
