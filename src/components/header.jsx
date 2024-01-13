import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center bg-orange-500 px-8">
              <Link href={"/"}>NextCrud</Link>
              <Link href={"/addItem"}>Add Item</Link>
            </nav>
        </div>
    );
}

export default Header;