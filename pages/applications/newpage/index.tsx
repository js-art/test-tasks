import Head from 'next/head';
import SidebarLayout from '../../../src/layouts/SidebarLayout';
import generateImages from '@/utils/generateImage';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  CircularProgress,
  Typography,
  styled
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

const RootWrapper = styled(Box)(
  ({ theme }) => `
       height: calc(100vh - ${theme.header.height});
       display: flex;
`
);

function NewPage() {
  const [randomImage, setRandomImage] = useState();
  const [loading, setLoading] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const changeImage = useCallback(async () => {
    setLoading(true);
    const img = await generateImages();
    setRandomImage(img);
    setLoading(false);
  }, []);

  useEffect(() => {
    changeImage();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!mouseOver) {
        changeImage();
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [mouseOver]);

  return (
    <>
      <Head>
        <title>New Page Task</title>
      </Head>
      <RootWrapper p={3} className="Mui-FixedWrapper">
        <Box>
          <Card sx={{ minWidth: 400, maxWidth: 600, position: 'relative' }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height={250}
              sx={{ position: 'absolute', top: 0, left: 0, right: 0 }}
            >
              {loading ? (
                <CircularProgress sx={{ zIndex: 3 }} />
              ) : (
                <Typography sx={{ zIndex: '0' }}>Loading image...</Typography>
              )}
            </Box>
            <CardMedia
              onMouseEnter={() => setMouseOver(true)}
              onMouseLeave={() => setMouseOver(false)}
              sx={{
                width: '100%',
                height: 250,
                zIndex: 2,
                position: 'relative',
                '&:hover': {
                  filter: 'grayscale(100%)'
                },
                transition: 'filter 0.3s'
              }}
              image={randomImage}
              title="Random Image"
            />

            <CardActions>
              <Button
                onClick={() => changeImage()}
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
