import React from "react";
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  CardActions,
  CardContent,
  Card,
} from "@mui/material";
import { Grid } from "@mui/material";
import Button from "../../Components/Button";
import ImageComponent from "../../Components/ImageComponent";
import {
  BsInfinity,
  BsEnvelopeOpen,
  BsCheck,
  BsTypeBold,
} from "react-icons/bs";
import { MdDraw } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

const Banner = (props) => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ display: { xs: 'flex'}, justifyContent: 'center', alignItems: 'center' }}>
        <Grid xs={12} md={8} sx={{ marginBottom: "3rem" }}>
          <Typography
            variant="h1"
            sx={{
              lineHeight: 1.3,
              whiteSpace: "pre-line",
              fontSize: { md: "3.1rem", xs: "2rem" },
              letterSpacing: "0.15rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Your life's work, {"\n"}
            <span
              style={{
                // borderBottom: {xs:"none", md:"2px solid #f60014"},
                paddingBottom: "2rem",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              p
            </span>
            owered by our life's work
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginTop: "3rem", marginBottom: "2rem", fontSize: { md: "1.5rem", xs: "1.3rem" }, lineHeight: "1.5", textAlign: { xs: "center", md: "left" } }}
          >
            A unique and powerful software suite to transform the way you
            work. Designed for businesses of all sizes, built by a company
            that values your privacy.
          </Typography>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Button
              backgroundColor="#f60014"
              text="GET STARTED FOR FREE"
              icon={<RiArrowRightSLine />}
            />
          </Box>
          <Box>
            <ImageComponent
              src="../images/banner.png"
              alt="Banner image"
              width="100%"
            />
          </Box>
        </Grid>

        <Grid xs={12} md={4} >
            <Card variant="outlined" sx={{ marginBottom: "100px", }}>
              <CardContent>
                <List>
                  <Typography
                    sx={{ mt: 4, mb: 2 }}
                    variant="h6"
                    component="div"
                  >
                    Featured apps
                  </Typography>

                  <ListItem>
                    <ListItemAvatar>
                      <BsInfinity size={40} color="#056cb8" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="CRM"
                      secondary="Comprehensive CRM platform for customer-facing teams."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <BsEnvelopeOpen size={40} color="#056cb8" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Mail"
                      secondary="Secure email service for teams of all sizes."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <BsCheck size={40} color="#056cb8" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Projects"
                      secondary="Manage, track, and collaborate on projects with teams."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <BsTypeBold size={40} color="#056cb8" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Books"
                      secondary="Powerful accounting platform for growing businesses."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <MdDraw size={40} color="#056cb8" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Creator"
                      secondary="Build custom apps to simplify business processes."
                    />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions sx={{ padding: "16px", color: "#056cb8" }}>
                <Typography variant="a" size="small">EXPLORE ALL PRODUCTS </Typography>
                <RiArrowRightSLine />
              </CardActions>
            </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
