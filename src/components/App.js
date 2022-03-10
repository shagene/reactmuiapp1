import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageListComp from "./ImageList";
import { CssBaseline } from "@mui/material";
class App extends React.Component {
  state = {
    images1: [],
    images2: [],
  };

  onSearchSubmit = async (term, term2) => {
    const response1 = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    const response2 = await unsplash.get("/search/photos", {
      params: { query: term2 },
    });
    this.setState({
      images1: response1.data.results,
      images2: response2.data.results,
    });
  };

  render() {
    return (
      <>
        {/* <Box
          sx={{
            height: "98vh",
            alignItems: "center",
            bgcolor: "background.paper",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 1,
            fontWeight: "bold",
          }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageListComp
            images1={this.state.images1}
            images2={this.state.images2}
          />
        </Box> */}
        <React.Fragment>
          <CssBaseline />
          <Container>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageListComp
              images1={this.state.images1}
              images2={this.state.images2}
            />
          </Container>
        </React.Fragment>
      </>
    );
  }
}

export default App;

// https://mui.com/components/autocomplete/
