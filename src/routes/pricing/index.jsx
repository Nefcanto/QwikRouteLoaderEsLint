import { ItemOne, ItemTwo } from 'Base'

const Pricing = () => {

    const tierClass = 'bg-red-400'

    return <div>
        <div>design: we don't do it</div>
        <hr />
        <div>
            <h2>Web site</h2>
            <ul class='flex flex-col lg:flex-row gap-4'>
                <li class={tierClass}>
                    <h3>landing</h3>
                    <ul>
                        <li>(from a day up to a week)</li>
                        <li>100-300</li>
                    </ul>
                </li>
                <li class={tierClass}>
                    <h3>business</h3>
                    <div>(2 working weeks)</div>
                    <ul>
                        <li>Home page</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Blog</li>
                        <li>Team</li>
                        <li></li>
                    </ul>
                    <div>from 1100</div>
                </li>
                <li class={tierClass}>
                    <h3>showcase, portfolio</h3>
                    <ul>
                        <li>(adding 4 days)</li>
                        <li>Business package +</li>
                        <li>List of works, projects, products</li>
                        <li>categorization</li>
                        <li>search</li>
                        <li>work, project, product showcase</li>
                        <li>from 1600</li>
                    </ul>
                </li>
                <li class={tierClass}>
                    <h3>online shopping</h3>
                    <ul>
                        <li>(adding a month)</li>
                        <li>showcase +</li>
                        <li>shopping cart</li>
                        <li>online payment</li>
                        <li>user profile</li>
                        <li>advanced filtering</li>
                        <li>discounts</li>
                        <li>coupons</li>
                        <li>shipments</li>
                        <li>order management</li>
                        <li>from 3000</li>
                    </ul>
                </li>
            </ul>

        </div>
        <hr />
        <div>
            <span>Extra features</span>
            <ul>
                <li>Club</li>
                <li>Task management</li>
                <li>Ticketing</li>
                <li>...</li>
            </ul>
        </div>
        <hr />
        <div>
            <span>Tailored software, Month/based</span>
            <ul>
                <li>$3200 per month</li>
            </ul>
        </div>
        <hr />
        <div>
            <span>SEO</span>
            <ul>
                <li>
                    <span></span>
                </li>
            </ul>
            <div>
                <span>Notes</span>
                <ul>
                    <li>We hire english graduates</li>
                    <li>We power them with grammarly & ChaptGPT</li>
                    <li>We supervise and correct their writings</li>
                    <li>the rest is technical</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Pricing
