export const BugList = () => {
    return(
        <div className="absolute bottom-5 right-5 w-64 bg-black py-2 px-4 opacity-80">
            <p>Bugs:</p>
            <ul className="text-sm list-disc list-inside">
                <li>Saturn has no rings</li>
                <li>There are no moons</li>
                <li>Lighting is not accurate</li>
                <li>Camera snaps when changing target.</li>
                <li>No planet atmospheres</li>
                <li>No intro animation text</li>
                <li>Broken on iphone safari but not ipad safari or iphone chrome</li>
                <li>Speed control doesnt restore previous value if you click on two or more planets in a row</li>
            </ul>
        </div>
    )
}
export default BugList
