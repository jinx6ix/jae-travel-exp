import React, { useState } from 'react';
import Link from 'next/link';
import classes from './index.module.scss';
import Hamburger from '../../Hamburger';
import CloseButton from '../closeHamburger';
import { CMSLink } from '../../Link';

interface NavItem {
  link: {
    MiniCategories?: (string | { title: string; CustomUrl: string; subCategories?: (string | { title: string; CustomUrl: string })[] })[];
  };
}

interface MobileNavProps {
  navItems: NavItem[];
}

const MobileNav = ({ navItems, toggleMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItem, setOpenItem] = useState<number | null>(null);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleMobileMenu(); // Call the function passed from the parent
  };

  const handleItemClick = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    e.preventDefault(); // Prevent the default link behavior

    if ('MiniCategories' in navItems[i].link && navItems[i].link.MiniCategories?.length > 0) {
      setOpenItem(openItem === i ? null : i);
    } else {
      // If the clicked link doesn't have mini-categories, navigate to the link
      const linkElement = e.currentTarget.firstChild as HTMLAnchorElement;
      if (linkElement && linkElement.href) {
        window.location.href = linkElement.href;
      }
    }
  };

  return (
    <div className={classes.mobileNav}>
      <Hamburger isOpen={isOpen} handleClick={toggleMenu} />
      {isOpen && (
        <div className={`${classes.mobileMenu} ${isOpen ? classes.open : ''}`}>
          <CloseButton onClick={toggleMenu} />
          {navItems.map(({ link }, i) => (
            <div key={i} className={classes.mobileNavItem}>
              <div
                className={classes.mobileNavItemContent}
                onClick={(e) => handleItemClick(e, i)}
              >
                <CMSLink {...link} appearance="none" />
                {'MiniCategories' in link && link.MiniCategories?.length > 0 && (
                  <span
                    className={`${classes.dropdownIcon} ${
                      openItem === i ? classes.rotated : ''
                    }`}
                  >
                    &#9654;
                  </span>
                )}
              </div>
              {'MiniCategories' in link && openItem === i && link.MiniCategories?.length > 0 && (
                <div className={`${classes.mobileDropdown} ${classes.slideIn}`}>
                  <ul>
                    {link.MiniCategories?.map((miniCategory, index) => (
                      <li key={index}>
                        {typeof miniCategory === 'string' ? (
                          <Link href={`/projects`} passHref>
                            {miniCategory}
                          </Link>
                        ) : (
                          <div>
                            <Link href={`/${miniCategory?.CustomUrl}`} passHref>
                              {miniCategory.title}
                            </Link>
                            {miniCategory?.subCategories?.length > 0 && (
                              <ul className={classes.mobileSubCategories}>
                                {miniCategory.subCategories.map((subCategory, index) => (
                                  <li key={index}>
                                    {typeof subCategory === 'string' ? (
                                      <Link href="/post">{subCategory}</Link>
                                    ) : (
                                      <Link href={`/${subCategory?.CustomUrl}`} passHref>
                                        {subCategory.title}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;