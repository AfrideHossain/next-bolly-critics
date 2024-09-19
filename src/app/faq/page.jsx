import { Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Heading from "@/components/Heading/Heading";

const Faq = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Heading title={"Frequently asked questions"} />
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ques1-content"
            id="ques1-header"
          >
            <Typography>What is Bolly Critics?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Bolly Critics is a dedicated platform for Bollywood movie reviews
              where users can read detailed critiques, ratings, and reviews by
              professional critics and fellow movie enthusiasts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ques2-content"
            id="ques2-header"
          >
            <Typography>
              How can I read movie reviews on Bolly Critics?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Simply visit our homepage and browse through the latest reviews.
              You can also use the search bar to find reviews for specific
              movies or explore reviews categorized by genres and release dates.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ques3-content"
            id="ques3-header"
          >
            <Typography>How can I submit my movie review?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`To submit your review, you need
              to create an account on Bolly Critics. Once registered, you can
              log in and submit your reviews through the 'Submit Review' section
              on your profile.`}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ques4-content"
            id="ques4-header"
          >
            <Typography>Are the reviews on Bolly Critics unbiased?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we strive to maintain unbiased and honest reviews. Our
              critics provide their personal opinions based on their viewing
              experiences, and we encourage a diverse range of perspectives to
              ensure a well-rounded critique.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ques5-content"
            id="ques5-header"
          >
            <Typography>Can I trust the ratings on Bolly Critics?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`Our ratings are a combination of professional critics' scores and
              user ratings. We ensure that all reviews are genuine and come from
              verified users to maintain the integrity of our ratings system.`}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ques6-content"
            id="ques6-header"
          >
            <Typography>
              How frequently is the website updated with new reviews?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We update our website with new reviews as soon as a new Bollywood
              movie is released. Our team of critics works diligently to provide
              timely reviews so you can stay informed about the latest films.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ques7-content"
            id="ques7-header"
          >
            <Typography>
              Is there a way to follow my favorite critics?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, once you create an account, you can follow your favorite
              critics and receive notifications whenever they post new reviews.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ques8-content"
            id="ques8-header"
          >
            <Typography>
              How do I contact Bolly Critics for more information or support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`You can reach us through the 'Contact Us' page on our website.
              Fill out the contact form with your query, and our support team
              will get back to you as soon as possible.`}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ques9-content"
            id="ques9-header"
          >
            <Typography>
              Can I request a review for a specific movie?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`Absolutely! If there's a particular movie you want reviewed, you
              can submit a request through our 'Request Review' section. We’ll
              do our best to accommodate your request.`}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ques10-content"
            id="ques10-header"
          >
            <Typography>
              Are there any membership fees for accessing reviews on Bolly
              Critics?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, accessing reviews on Bolly Critics is completely free.
              However, we offer premium memberships with additional features
              like ad-free browsing and early access to reviews.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default Faq;
