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
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Typography
              variant="h1"
              sx={{
                lineHeight: 1.3,
                whiteSpace: "pre-line",
                fontSize: "3.1rem",
                letterSpacing: "0.15rem",
              }}
            >
              Your life's work, {"\n"}
              <span
                style={{
                  borderBottom: "2px solid #f60014",
                  paddingBottom: "2rem",
                }}
              >
                p
              </span>
              owered by our life's work
            </Typography>

            <Typography
              variant="h6"
              sx={{ marginTop: "3rem", marginBottom: "2rem", fontSize: "1.5rem", lineHeight: "1.5" }}
            >
              A unique and powerful software suite to transform the way you
              work. Designed for businesses of all sizes, built by a company
              that values your privacy.
            </Typography>
            <Button
              backgroundColor="#f60014"
              text="GET STARTED FOR FREE"
              icon={<RiArrowRightSLine />}
            />
            <Box>
              <ImageComponent
                src="../images/banner.png"
                alt="Banner image"
                width="100%"
              />
            </Box>
          </Grid>

          <Grid xs={4}>
            <Card variant="outlined" sx={{marginBottom: "100px"}}>
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
