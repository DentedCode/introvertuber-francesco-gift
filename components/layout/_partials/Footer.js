import Image from 'react-bootstrap/image'
const Footer = () => {
  const socials = [
    {
      icon: 'fab fa-twitter-square',
      url: 'https://twitter.com/FrancescoCiull4',
      color: '',
    },
    {
      icon: 'fab fa-youtube-square',
      url: 'https://youtube.com/FrancescoCiulla',
      color: 'red',
    },
    {
      icon: '',
      icon_ulr: '/images/hashnode.png',
      url: 'https://francescociulla.com',
    },
    {
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/francesco-ciulla-roma/',
    },
    {
      icon: 'fab fa-github-square',
      url: 'https://github.com/FrancescoXX',
    },
  ]
  return (
    <footer className="text-center">
      <div className="social-links pt-4">
        <ul className="social-link-item ">
          {socials.map((social, i) => (
            <li key={i}>
              <a href={social.url} target="_blank">
                {social.icon_ulr ? (
                  <Image src={social.icon_ulr} with="70px" height="70px" />
                ) : (
                  <i className={social.icon}></i>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="copyright small">
        Copyright &copy; Francesco all right reserved
      </div>
    </footer>
  )
}

export default Footer
