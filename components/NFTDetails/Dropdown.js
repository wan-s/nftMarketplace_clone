import { Disclosure } from '@headlessui/react'
import {BiChevronUp, BiChevronDown } from 'react-icons/bi'

const style = {
  buttonWrapper:`flex items-center justify-between p-4`,
  buttonLeft: `flex items-center space-x-4`,
  title: `font-semibold` ,
  rightIcon: `h-6 w-6 text-gray-400`,
  innerTextContainer: `bg-gray-50 p-4 dark:bg-[#313339]`,
  
}

const DropDown = ({title,icon}) => {
  

  return (
    <Disclosure>
      {({open}) =>(
      <>
        <Disclosure.Button>
          <div className={style.buttonWrapper}> 
            <div className={style.buttonLeft}>
              {icon} 
              <span className={style.title}>{title}</span>
            </div>

            {open ? (
              <BiChevronDown className = {style.rightIcon}/>
            ) : (
              <BiChevronDown className = {style.rightIcon}/>

            )}
            
          </div>
        </Disclosure.Button>
        <Disclosure.Panel>
          <div className = {style.innerTextContainer} > A handcrafted collection of 10,000 characters developed by artist DirtyRobot. Each with their own identity to be discovered within the wider stories of RENGA. In its purest form, RENGA is the art of storytelling.
          </div>
        </Disclosure.Panel>
      </>
      )}
    </Disclosure>
  )
  
}

export default DropDown