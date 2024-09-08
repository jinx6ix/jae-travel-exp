'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FaCaretRight } from 'react-icons/fa'
import Link from 'next/link'

import { Category, Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'
import AnimatedButton from '../../AnimatedButton'
import MobileNav from '../MobileNav'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
  const [openItem, setOpenItem] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredMiniCategoryIndex, setHoveredMiniCategoryIndex] = useState(null)
  const dropdownRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMenu = () => setIsOpen(!isOpen)


  const handleItemClick = index => {
    if (openItem === index) {
      setOpenItem(null)
    } else {
      setOpenItem(index)
    }
  }

  const handleOutsideClick = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setTimeout(() => {
        setOpenItem(null)
        setHoveredMiniCategoryIndex(null)
      }, 6000)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleMouseEnterMiniCategory = index => {
    setHoveredMiniCategoryIndex(index)
  }

  const handleMouseLeaveMiniCategory = () => {
    setHoveredMiniCategoryIndex(null)
  }

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      <div className={classes.desktopNav} ref={dropdownRef}>
        {navItems.map(({ link }, i) => (
          <div key={i} className={classes.navItem}>
            <div className={classes.navItemContent} onClick={() => handleItemClick(i)}>
              <CMSLink {...link} appearance="none" />
              {'MiniCategories' in link && link.MiniCategories?.length > 0 && (
                <span className={classes.dropdownIcon}>&#9660;</span>
              )}
            </div>
            {typeof link === 'object' &&
              'MiniCategories' in link &&
              openItem === i &&
              link?.MiniCategories?.length > 0 && (
                <div className={classes.dummyDataContainer}>
                  <ul>
                    {link.MiniCategories?.map((miniCategory: string | Category, index: number) => {
                      if (typeof miniCategory === 'string') {
                        return (
                          <li key={index} className={classes.MiniCategories}>
                            <Link href={`/projects`} passHref>
                              {miniCategory}
                            </Link>
                          </li>
                        )
                      } else {
                        return (
                          <li
                            key={index}
                            className={`${classes.miniCategoryItem} ${classes.MiniCategoriesLinks}`}
                            onMouseEnter={() => handleMouseEnterMiniCategory(index)}
                            onMouseLeave={handleMouseLeaveMiniCategory}
                          >
                            <Link
                              className={classes.MiniCategories}
                              href={`/${miniCategory?.CustomUrl}`}
                              passHref
                            >
                              {miniCategory.title}
                              {miniCategory?.subCategories?.length > 0 && (
                                <span
                                  className={`${classes.SidedropdownIcon} ${
                                    hoveredMiniCategoryIndex === index ? classes.rotated : ''
                                  }`}
                                >
                                  <FaCaretRight />
                                </span>
                              )}
                            </Link>
                            {hoveredMiniCategoryIndex === index &&
                              miniCategory?.subCategories?.length > 0 && (
                                <div className={classes.subCategoriesPanel}>
                                  <ul className={classes.subCategories}>
                                    {miniCategory?.subCategories?.map((subCategory, index) => {
                                      if (typeof subCategory === 'string') {
                                        return (
                                          <li key={index}>
                                            <Link
                                              className={`${classes.MiniCategories} ${classes.MiniCategoriesLinks}`}
                                              href="/post"
                                            >
                                              {subCategory}
                                            </Link>
                                          </li>
                                        )
                                      } else {
                                        return (
                                          <li key={index}>
                                            <Link
                                              className={`${classes.MiniCategories} ${classes.MiniCategoriesLinks}`}
                                              href={`/${subCategory?.CustomUrl}`}
                                              passHref
                                            >
                                              {subCategory.title}
                                            </Link>
                                          </li>
                                        )
                                      }
                                    })}
                                  </ul>
                                </div>
                              )}
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
              )}
          </div>
        ))}
      </div>
      {!isMobileMenuOpen && <AnimatedButton />}
      <MobileNav navItems={navItems} toggleMobileMenu={toggleMobileMenu} />
      
    </nav>
  )
}
