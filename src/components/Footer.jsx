import React from 'react';
import payment from '/payment.png'


const Footer = () => {
    return (
        <div className='mt-8 mb-5 mx-4 lg:mx-52'>
            <div className="flex gap-12">
                <div className="flex flex-1 flex-col gap-2 text-[14px] text-justify">
                    <h1 className='text-[18px] font-[500] text-[#555]'>Categories</h1>
                    <span className='span'>Women</span>
                    <span className='span'>Men</span>
                    <span className='span'>Shoes</span>
                    <span className='span'>Accesories</span>
                    <span className='span'>New Arrivals</span>
                </div>

                <div className="flex flex-1 flex-col gap-2 text-[14px] text-justify">
                    <h1 className='text-[18px] font-[500] text-[#555]'>Links</h1>
                    <span className='span'>FAQ</span>
                    <span className='span'>Pages</span>
                    <span className='span'>Stores</span>
                    <span className='span'>Compare</span>
                    <span className='span'>Cookies</span>
                </div>

                <div className=" flex flex-1 gap-2 flex-col text-[14px] text-justify">
                    <h1 className='text-[18px] font-[500] text-[#555]'>About Us</h1>
                    <span className='span'>Loremipsum dolor sit amet consectetur adipisicing elit.
                        Architecto voluptatem molestias cupiditate possimus ipsum saep.
                    </span>
                </div>

            
           </div> 

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16">
                <div className="flex items-center ">
                    <span className="font-bold text-[24px] text-[#2879fe] ">ROADHOUSE</span>
                    <span className="ml-[20px] text-[12px] text-[gray]">© 2024. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img className="h-[50px]" src={payment} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Footer


{/*
        <div className="flex flex-1 flex-col gap-2 text-[14px] text-justify">
                    <h1 className='text-[18px] font-[500] text-[#555]'>Contact Us</h1>
                    <span className='span'>
                        Tel: +123-456-7890
                        <br />
                        Email: RoadHousemall@gmail.com
                    </span>
                </div>  
 
 
 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto voluptatem molestias cupiditate possimus ipsum saepe,
                        iste, pariatur voluptate, quos temporibus est placeat quidem omnis.
                        Accusantium laudantium ex accusamus quia eveniet.

    import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/footer_links";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/socials"

const Footer = () => {
    return (
        <footer className="flexCenter pb-[4rem] pt-[3rem]">
            <div className="max_padd_container flex w-full flex-col gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link to="/" className="mb-10 bold-20 "> RoadHouse</Link>
                    <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
                        {FOOTER_LINKS.map((col) => (

                            <FooterColumn title={col.title} key={col.title} >
                                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                                    {col.links.map((links) => (
                                        <Link to='/' key={links}>{links}</Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}


                        <div className="flex flex-col gap-5">
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <Link to='/' key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                                        <p>{link.label}:</p>
                                        <p className="medium-14">{link.value}</p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>

                        <div className="flex">
                            <FooterColumn>
                                <ul className="flex gap-4">
                                    {SOCIALS.links.map((link) => (
                                        <Link to='/' key={link}>
                                            <img src={link} alt="socialicon"
                                                height={22} width={22} />
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>

                    </div>
                </div>
                <div className="border bg-gray-20"></div>
                <p className="text-center regular-14 text-gray-30 mt-[-1rem]"> 2024 RoadHouse | All rights reserved.</p>
            </div>
        </footer>
    );
}


const FooterColumn = ({ title, children }) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    );
*/}











