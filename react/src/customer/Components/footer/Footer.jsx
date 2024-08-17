import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Company
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          About
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Jobs
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Press
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Partners
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} >
        <Typography className='pb-5' variant="h6" gutterBottom>
        User Account
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          My Account
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Order History
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Wishlist
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Insights
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Support
        </Typography>
      </Grid >
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
        Additional Resources
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        FAQ
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Help Center
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Legal
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Privacy Policy
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Terms of Service
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Refund Policy
        </Typography>
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with CDAC MUMBAI
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{' '}
          <Link href="https://mui.com/material-ui/material-icons/" color="inherit" underline="always">
            Matrial Icons
          </Link>{' '}
          from{' '}
          <Link href="https://mui.com/material-ui/material-icons/"color="inherit" underline="always">
            www.mui.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
