export default function CaseOverview() {
    const examples = [
        {
            title: "Manny Pacquiao Fake Endorsements",
            description:
                "Manny Pacquiao, a world-renowned boxer and former senator, was falsely depicted in deepfake videos promoting online gambling platforms. \
                These fake advertisements used AI-generated videos and manipulated images to make it appear as if he endorsed casino apps like 'Manny Pacquiao Online Casino Game' and 'VIP PH.' \
                Despite Pacquiao's public denials, these ads misled thousands of users, many of whom were drawn into scams believing they were investing in a legitimate product. \
                This case highlights how deepfake technology can be weaponized to exploit a public figure’s reputation for financial gain.",
            source: "https://www.rappler.com/newsbreak/fact-check/manny-pacquiao-name-image-used-fake-online-gambling-ads/"
        },
        {
            title: "Fake News Reports About PAGCOR",
            description:
                "A series of AI-generated deepfake videos falsely claimed that the Philippine Amusement and Gaming Corporation (PAGCOR) had launched an online gaming platform in collaboration with a major software provider. \
                These videos, designed to mimic real news broadcasts, even used AI-generated versions of well-known news anchors to make the report seem authentic. \
                Upon closer examination, deepfake analysis tools flagged inconsistencies in lip-syncing and unnatural speech patterns. PAGCOR had to issue a public statement debunking the claims, \
                warning users against falling for scams that misused their branding and authority.",
            source: "https://www.rappler.com/newsbreak/fact-check/pagcor-did-not-launch-online-gaming-platform-news-report-ai-edited/"
        },
        {
            title: "MrBeast Giveaway Scam",
            description:
                "Jimmy Donaldson, popularly known as MrBeast, became the target of a deepfake scam where AI-generated videos falsely claimed he was giving away free iPhones. \
                MrBeast is widely known for his philanthropy and extravagant giveaways, making him an easy target for scammers looking to exploit his generous reputation. \
                The deepfake videos were highly convincing, using synthetic voice cloning and AI-generated visuals to imitate MrBeast’s speech and mannerisms. \
                Victims of the scam were directed to fraudulent websites where they were asked to provide personal information and make small 'processing fee' payments—only to receive nothing in return. \
                The incident raised concerns about the increasing sophistication of deepfake scams and their ability to deceive even tech-savvy users.",
            source: "https://www.bbc.com/news/technology-66983194"
        },
        {
            title: "Anne Curtis PesoBET Promotion",
            description:
                "Filipina actress Anne Curtis was another celebrity victim of deepfake manipulation. Fraudulent advertisements featuring an AI-generated version of her face and voice \
                falsely claimed that she was promoting PesoBET, an online betting platform. The deepfake was created by altering existing video footage of Curtis and using voice synthesis technology to make it appear as if she endorsed the app. \
                These deceptive ads spread widely on social media, tricking users into believing Curtis was affiliated with the gambling site. \
                The manipulation of celebrity endorsements through deepfakes demonstrates how AI technology can be used to mislead audiences and damage reputations.",
            source: "https://www.rappler.com/entertainment/online-gambling-apps-use-manipulated-celebrity-advertisements-mislead-public/"
        },
        {
            title: "Brad Pitt Cryptocurrency Scam",
            description:
                "A deepfake of Brad Pitt was used in a fraudulent cryptocurrency investment scheme that claimed he was backing a new blockchain project. \
                The deepfake video showcased an AI-generated Pitt discussing the 'next big thing in crypto,' urging people to invest quickly. \
                Scammers behind the scheme created fake websites mimicking legitimate financial news outlets to give credibility to their scam. \
                This incident highlights how deepfake technology is being leveraged for financial fraud, with scammers capitalizing on public trust in celebrities to promote deceptive schemes.",
            source: "https://sigma.world/news/celebs-deepfake-threat-as-illegal-gambling-expands/"
        },
        {
            title: "BBC News Anchor Deepfake",
            description:
                "Deepfake videos of BBC news anchors Sally Bundock and Matthew Amroliwala were used to promote a fake investment scheme allegedly endorsed by Elon Musk. \
                The altered videos showed the anchors discussing a 'revolutionary' financial opportunity, complete with manipulated voiceovers and AI-generated facial movements. \
                Although the deepfakes contained several telltale errors—such as unnatural mouth movements and mispronounced words—they were convincing enough to mislead thousands of viewers. \
                BBC had to issue warnings, clarifying that the anchors never endorsed such investments. This case underscores the dangers of deepfake technology in spreading financial misinformation.",
            source: "https://www.bbc.co.uk/news/technology-66993651"
        },
        {
            title: "Shah Rukh Khan Betting Ads",
            description:
                "Bollywood superstar Shah Rukh Khan was falsely depicted in deepfake advertisements endorsing online betting sites during major sporting events like the IPL. \
                The ads, featuring AI-generated versions of Khan, claimed that he was a brand ambassador for various betting platforms. \
                The deceptive nature of these deepfakes led to public confusion, with fans questioning whether the actor was genuinely involved. \
                Khan’s legal team later issued statements denying any association with these ads, calling for stricter regulations to prevent misuse of AI-generated media.",
            source: "https://sigma.world/news/celebs-deepfake-threat-as-illegal-gambling-expands/"
        },
        {
            title: "Voice Cloning Scams",
            description:
                "AI-driven voice cloning technology has enabled scammers to impersonate celebrities like Oprah Winfrey, Jennifer Aniston, and Elon Musk in elaborate frauds. \
                Victims were targeted with phone calls and videos where these AI-generated voices promoted fake investment opportunities and giveaways. \
                The rise of synthetic voice scams has made it increasingly difficult for people to distinguish between real and fake celebrity endorsements. \
                These scams highlight the pressing need for AI detection tools to combat the spread of voice deepfakes in fraud schemes.",
            source: "https://www.bitdefender.com/en-gb/blog/labs/audio-deepfakes-celebrity-endorsed-giveaway-scams-and-fraudulent-investment-opportunities-flood-social-media-platforms"
        },
        {
            title: "Elon Musk Real Estate Investment Scam",
            description:
                "A deepfake video of Elon Musk was used in a fraudulent marketing campaign for a real estate investment company, \
                reAlpha Tech Corp. The video featured an AI-generated version of Musk discussing 'exclusive investment opportunities,' \
                tricking people into believing he was personally involved in the project. This scam exploited Musk's high-profile status \
                to gain credibility, deceiving many investors into signing up for what turned out to be a fake scheme. \
                The misuse of deepfakes in financial fraud raises serious ethical concerns about trust and identity theft in digital media.",
            source: "https://www.wsj.com/articles/deepfakes-of-celebrities-have-begun-appearing-in-ads-with-or-without-their-permission-11666692003"
        },
        {
            title: "Tom Cruise & Leonardo DiCaprio Unauthorized Endorsements",
            description:
                "A promotional video for the machine-learning company Paperspace Co. featured deepfake versions of Hollywood actors \
                Tom Cruise and Leonardo DiCaprio. The AI-generated video made it appear as if these celebrities were endorsing the company, \
                despite neither actor having agreed to participate. This case highlights the growing risk of AI-powered advertising scams \
                and the potential for unauthorized digital likeness exploitation. While some deepfake ads are designed as parodies, \
                the increasing sophistication of AI-generated content blurs the line between satire and deception, leading to new legal and \
                ethical challenges.",
            source: "https://www.wsj.com/articles/deepfakes-of-celebrities-have-begun-appearing-in-ads-with-or-without-their-permission-11666692003"
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black p-8">
            <h1 className="text-4xl font-bold">Case Overview</h1>
            <p className="mt-4 max-w-2xl text-center">
                Deepfake technology has revolutionized digital media but also introduced ethical concerns.
                This section explores real-world deepfake cases, illustrating the risks associated with AI-generated media.
            </p>

            <div className="mt-8 max-w-3xl space-y-8">
                {examples.map((example, index) => (
                    <div key={index} className="border-t border-gray-600 pt-6">
                        <h2 className="text-2xl font-semibold">{example.title}</h2>
                        <p className="mt-4 text-gray-300">{example.description}</p>
                        <p className="mt-2 text-blue-400">
                            <a href={example.source} target="_blank" rel="noopener noreferrer">
                                Read More →
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}
