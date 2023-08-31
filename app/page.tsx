import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero-section/Hero';
import Productivity from './components/Productivity/Productivity';
import StickyNav from './components/Navbar/StickyNav';
import Collaboration from './components/Collaboration/Collaboration';
import Security from './components/Security/Security';
import Globe from './components/Footer/Globe';
import Footer from './components/Footer/Footer';

export default function Home() {
    return (
        <div>
            <div className='relative z-50'>
                <div className='absolute'>
                    <Navbar />
                </div>
            </div>
            <div>
                <div className='overflow-hidden'>
                    <div className='relative'>
                        <img className='absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] image' width='4377' src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" alt="" />
                    </div>
                    <div className='hero-section px-3 '>
                        <Hero />
                    </div>
                    <StickyNav />
                    <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden mb-32'>
                        <Productivity />
                    </div>
                    <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
                        <Collaboration />
                    </div>
                    <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
                        <Security />
                    </div>
                    <Globe />
                    <div className='max-w-[1280px] mx-auto relative z-[2]  px-5'>
                                                                                {/* flex flex-row-reverse */}
                        <ul className='lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1'>
                            <li className=''><sup id="footnote-1"></sup>⚠️Nova Plus is nothing but a redevelopment Github Website</li>
                            <li><sup id="footnote-2"></sup>In the next version of Nova, more than 18 pages will be added to launch a site similar to GitHub 09/2023. LNc,</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}