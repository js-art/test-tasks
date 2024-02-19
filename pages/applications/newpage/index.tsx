import Head from 'next/head';
import SidebarLayout from '../../../src/layouts/SidebarLayout';
import { faker } from '@faker-js/faker';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  styled
} from '@mui/material';
import { useState } from 'react';

const RootWrapper = styled(Box)(
  ({ theme }) => `
       height: calc(100vh - ${theme.header.height});
       display: flex;
`
);

function NewPage() {
  const [randomImage, setRandomImage] = useState(faker.image.url());

  console.log(randomImage, 'randomImage');
  return (
    <>
      <Head>
        <title>New Page Task</title>
      </Head>
      <RootWrapper p={3} className="Mui-FixedWrapper">
        <Box>
          <Card sx={{ minWidth: 400, maxWidth: 600 }}>
            <CardMedia
              sx={{ height: 250 }}
              image={randomImage || '/static/images/placeholders/covers/6.jpg'}
              title="Random Image"
            />

            <CardActions>
              <Button
                onClick={() => setRandomImage(faker.image.url())}
                sx={{ marginX: 'auto' }}
                variant="contained"
              >
                Change Image
              </Button>
            </CardActions>
          </Card>
        </Box>
      </RootWrapper>
    </>
  );
}

NewPage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default NewPage;
