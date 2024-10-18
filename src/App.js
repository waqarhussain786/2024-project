import React from 'react';
import './App.css'; // Import the CSS file for styles

function App() {
  return (
    <div style={styles.outerContainer}>
      <header style={styles.header}>
        <span style={styles.headerText}>MDDInsider</span>
        <img src="./assets/ic-round-menu.svg" alt="Menu" style={styles.menuIcon} />
      </header>

      <section style={styles.introSection}>
        <h1 style={styles.mainTitle}>7 Reasons MyoGlow Is The Most Sought-After Gift Of 2024</h1>
        <h2 style={styles.subtitle}>
          And How MyoGlow Helping Thousands Of Women Rock That Hollywood Sculpted Look
        </h2>
        <p style={styles.introText}>
          MyoGlow uses the power of Led Light Therapy, Sonic Massage, Thermal Therapy & MyoFacial
          Release therapy to transform your skin naturally. Say goodbye to those unwanted signs of
          aging and hello to firmer, toned, more youthful-looking skin. It’s time to embrace your
          natural beauty!
        </p>
      </section>

      <Section
        number="1"
        title="Results Happen Quicker Than You’d Expect"
        text={`Most women say that within a few days of using MyoGlow, they start noticing BIG improvements in the texture and tone of their skin. That’s because MyoGlow uses therapies which target the root cause of sagging skin while promoting collagen production. And by rejuvenating skin overtime, you get a long lasting toned look & fresh glow that’s hard to achieve with other skincare products.`}
        imageLeft="./assets/pic.svg"
        imageRight="./assets/pic-2.svg"
      />

      <Section
        number="2"
        title="MyoGlow is Gentle On Your Face"
        text={`Botox & Fillers wear off over time & are proven to permanently age your skin. Meanwhile the technology in MyoGlow is shown to renew life into every cell in your skin helping you age gracefully. Each therapy is non-invasive & loved by estheticians & dermatologists.`}
        imageLeft="./assets/frame-1000005406.svg"
        imageRight="./assets/rectangle-376-2.svg"
        reverse
      />

      {/* Additional sections can be created similarly by reusing the Section component */}

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <img src="./assets/logo.svg" alt="Logo" style={styles.logo} />
          <p style={styles.footerText}>
            These statements have not been evaluated by the Food and Drug Administration. The contents
            of this website/e-mail are for informational purposes only and are not intended to be a
            substitute for professional medical advice, diagnosis or treatment. Always seek the advice
            of your physician or other qualified health provider with any questions you may have
            regarding a medical condition.
          </p>
          <img src="./assets/social-media.svg" alt="Social Media" style={styles.socialMedia} />
        </div>
      </footer>
    </div>
  );
}

const Section = ({ number, title, text, imageLeft, imageRight, reverse }) => {
  return (
    <div style={{ ...styles.section, flexDirection: reverse ? 'row-reverse' : 'row' }}>
      <div style={styles.imageContainer}>
        <img src={imageLeft} alt="Before" style={styles.image} />
        <img src={imageRight} alt="After" style={styles.image} />
      </div>
      <div style={styles.textContainer}>
        <div style={styles.number}>{number}</div>
        <h3 style={styles.sectionTitle}>{title}</h3>
        <p style={styles.sectionText}>{text}</p>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    fontFamily: 'Montserrat, sans-serif',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '16px',
    backgroundColor: '#f2fefe',
  },
  header: {
    backgroundColor: '#3c3c3c',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#f2fefe',
    fontWeight: '700',
    fontSize: '28px',
    textTransform: 'uppercase',
  },
  menuIcon: {
    width: '32px',
    height: '32px',
  },
  introSection: {
    textAlign: 'center',
    padding: '32px',
    backgroundColor: '#ffffff',
  },
  mainTitle: {
    fontSize: '34px',
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: '500',
    color: '#000',
  },
  introText: {
    fontSize: '22px',
    fontWeight: '500',
    color: '#000',
    lineHeight: '140%',
    paddingTop: '16px',
  },
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '32px',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '50%',
    objectFit: 'cover',
  },
  textContainer: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#1fc1c1',
    color: '#fff',
    borderRadius: '10px',
    margin: '16px',
  },
  number: {
    fontSize: '88px',
    fontWeight: '400',
    fontFamily: 'Arial, sans-serif',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: '700',
    marginTop: '16px',
  },
  sectionText: {
    fontSize: '22px',
    fontWeight: '500',
    marginTop: '16px',
  },
  footer: {
    padding: '32px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  footerContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  logo: {
    width: '128px',
  },
  footerText: {
    fontSize: '12px',
    color: '#888',
    marginTop: '16px',
  },
  socialMedia: {
    width: '150px',
    marginTop: '16px',
  },
};

export default App;