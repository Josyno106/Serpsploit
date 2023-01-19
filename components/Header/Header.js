import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header style={{ zIndex: "10" }}>
        <div className="nav-wrapper">
          <Image
            src={""}
            alt="logo"
            height="70px"
            width="160px"
            object-fit="cover"
          />
          <nav>
            <ul>
              <li>
                <Link href="">
                  <a>Writing Help </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>How it Works</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Write for us</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>login</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Order Now</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="overflow">hello there</div>
        </div>
      </header>
    </>
  );
};

export default Header;
