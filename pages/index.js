import React from 'react';
import {
  withStyles,
  Arwes,
  Content,
  Words,
  Image,
  Button,
  Loading,
  createLoader,
  createResponsive,
  utils
} from 'arwes';

import withTemplate from '../site/withTemplate';
import { Link, TextIcon } from '../site/components';

const styles = theme => ({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    margin: 'auto',
    padding: theme.padding,
    textAlign: 'center',
    maxWidth: 580,
    '& h1': {
      margin: 0,
      paddingTop: 5,
      fontSize: 32,
      lineHeight: '1',
    },
    '& p': {
      margin: 0,
    },
    '& $detail + $detail': {
      marginTop: theme.margin / 2,
    },
  },
  section: {
    marginBottom: theme.margin / 1.5,
    '&:last-child': {
      margin: 0,
    },
  },
  profile: {
    margin: 0,
    display: 'inline-block',
    width: 150,
  },
  detail: {
    display: 'block',
  },
  textIcon: {
    textAlign: 'center',
  },
  button: {
    width: '50%',
  },
  // medium size +
  [`@media screen and (min-width: ${theme.responsive.small + 1}px)`]: {
    content: {
      '& $detail + $detail': {
        margin: [0, 0, 0, theme.margin / 2],
      },
    },
    detail: {
      display: 'inline-block',
    },
    button: {
      width: 'auto',
    },
  },
});

class Index extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      show: false,
      loaded: false
    };

    this.profile = '/static/img/yadi.jpg';

    this.loader = createLoader();
    this.responsive = createResponsive({
      getTheme: () => this.props.theme
    });
  }

  componentDidMount() {
    this.startLoading();
  }

  render() {
    const { show, loaded } = this.state;

    const { classes, resources } = this.props;
    const { background, pattern } = resources;

    return (
      <div>
        <Loading
          full
          animate
          show={!show && !loaded}
          animation={{
            unmountOnExit: true
          }}
        />
        <Arwes
          animate
          show={show}
          showResources={show}
          background={background}
          pattern={pattern}
        >
          {anim => (
            <Content className={classes.root}>

              <div className={classes.content}>

                <div className={classes.section}>
                  <Image
                    className={classes.profile}
                    animate
                    show={anim.entered}
                    resources={this.profile}
                  />
                </div>

                <div className={classes.section}>
                  <h1><Words animate show={anim.entered}>
                    Yadvi Bhalla
                </Words></h1>
                </div>

                <div className={classes.section}>
                  <p><Words animate show={anim.entered}>
                    Full Stack Web Developer | IT Technical Support Specialist | RHEL8 | Docker
                </Words></p>
                </div>

                <div className={classes.section}>
                  {/* <Link className={classes.detail} href='https://www.linkedin.com/in/romelperez' target='linkedin' onLink={this.onLink}>
                    <TextIcon className={classes.textIcon} show={anim.entered} icon='code-brackets'>Web Engineer</TextIcon>
                  </Link>
                  <Link className={classes.detail} href='https://hugeinc.com' target='_blank' onLink={this.onLink}>
                    <TextIcon className={classes.textIcon} show={anim.entered} icon='briefcase-outline'>Huge</TextIcon>
                  </Link> */}
                  <Link className={classes.detail} href='https://www.google.com.co/maps/place/Chennai-tamil-nadu' target='_blank' onLink={this.onLink}>
                    <TextIcon className={classes.textIcon} show={anim.entered} icon='map-marker-outline'>SRM Institute of Science and Technology, Chennai</TextIcon>
                  </Link>
                </div>

                <div className={classes.section}>
                  <Link className={classes.detail} href='/projects' onLink={this.onLink}>
                    <Button className={classes.button} animate show={anim.entered}>
                      {anim2 => <Words animate show={anim2.entered}>Projects</Words>}
                    </Button>
                  </Link>
                  <Link className={classes.detail} href='https://www.linkedin.com/in/yadvibhalla1210/' target='linkedin' onLink={this.onLink}>
                    <Button className={classes.button} animate show={anim.entered}>
                      {anim2 => <Words animate show={anim2.entered}>LinkedIn</Words>}
                    </Button>
                  </Link>
                  <Link className={classes.detail} href='https://github.com/yadvi12' target='github' onLink={this.onLink}>
                    <Button className={classes.button} animate show={anim.entered}>
                      {anim2 => <Words animate show={anim2.entered}>GitHub</Words>}
                    </Button>
                  </Link>
                  <Link className={classes.detail} href='https://twitter.com/ivday21' target='twitter' onLink={this.onLink}>
                    <Button className={classes.button} animate show={anim.entered}>
                      {anim2 => <Words animate show={anim2.entered}>Twitter</Words>}
                    </Button>
                  </Link>
                  <Link className={classes.detail} href='https://medium.com/@iivday21' target='medium' onLink={this.onLink}>
                    <Button className={classes.button} animate show={anim.entered}>
                      {anim2 => <Words animate show={anim2.entered}>Medium</Words>}
                    </Button>
                  </Link>

                </div>

              </div>

            </Content>
          )}
        </Arwes>
      </div>
    );
  }

  startLoading() {
    const responsive = this.responsive.get();
    const background = utils.getResponsiveResource(this.props.resources.background, responsive);

    this.loader.load({ images: [background, this.profile] }, { timeout: 5 * 1000 }).
      then(() => { }, () => { }).
      then(() => this.setState({ show: true, loaded: true }));
  }

  onLink = () => {
    this.setState({ show: false });
  }
}

export default withTemplate(withStyles(styles)(Index));
