import Image from "next/image";
import Img1 from "../../../../../public/Images/blog_13.png";
import Img2 from "../../../../../public/Images/blog_14.png";
import Img3 from "../../../../../public/Images/blog_15.png";

const BlogDetailTeamBuilding = () => {
  return (
    <div className="text-[#666666] leading-[28px]">
      <p className="pt-3">
        In the heart of the bustling pharmaceutical industry, amidst the fervor
        of competition, emerged a tournament that transcended mere victories on
        the football field. The Tứ Hùng Champion Cup, a spectacle of athleticism
        and camaraderie, witnessed the clash of titans from esteemed clubs like
        Hà Việt, Medilac, Trường Minh, and our very own Vạn Xuân team.
      </p>
      <p className="pt-3">
        From the onset, the stage was set, with each team donning their
        distinctive colors like badges of honor. Hà Việt, resplendent in light
        green, exuded a sense of vitality; Medilac, adorned in light blue,
        exuded calm and precision; while Trường Minh, clad in dark blue,
        emanated a stoic determination. Our Vạn Xuân warriors, draped in
        passionate red, stood ready to leave their mark on the tournament.
      </p>
      <div className="grid md:grid-cols-2 mt-5 gap-5">
        <Image
          className="w-full h-auto lg:h-[300px] max-h-[300px] object-cover"
          src={Img1}
          width={400}
          height={300}
          priority
          alt="img 1"
        />
        <Image
          className="w-full h-auto lg:h-[300px] max-h-[300px] object-cover"
          src={Img2}
          width={400}
          height={300}
          priority
          alt="img 1"
        />
      </div>
      <p className="pt-3">
        As the matches unfolded over three intense rounds, the field became a
        battleground where skill and strategy clashed. Spectators were treated
        to a display of exemplary athleticism and unwavering determination from
        all four teams. Yet, beyond the goals scored and saves made, something
        more profound was at play—a spirit of sportsmanship and learning
        exchange that infused every moment of the tournament. In the end, after
        a hard-fought battle and accumulating points with every match, it was
        our Vạn Xuân team that emerged victorious, clinching the coveted gold
        medal. But the triumph was not merely about lifting a trophy; it was a
        testament to the values of teamwork, perseverance, and mutual respect.
      </p>
      <div className="pt-3">
        <Image
          className="w-full h-auto md:h-[450px] object-cover"
          src={Img3}
          width={800}
          height={450}
          priority
          alt="img 3"
        />
      </div>
      <p className="pt-3">
        In the spirit of reflection, as we gaze upon the conclusion of this
        remarkable tournament, we recognize that the Tứ Hùng Champion Cup was
        more than just a football competition—it was a platform for the exchange
        of ideas, experiences, and knowledge within the pharmaceutical industry.
        Looking ahead to future seasons, let us carry forward the lessons
        learned and the bonds forged on the field of play. Let us continue to
        champion the spirit of learning and exchange, not only in sports but in
        every endeavor we pursue. For it is through such collaboration and
        mutual growth that we truly elevate ourselves and our industry to
        greater heights. As the final whistle blows on this chapter of the Tứ
        Hùng Champion Cup, let us embrace the victories, learn from the defeats,
        and march forward with renewed vigor and determination. For in the
        journey ahead, the greatest triumphs await those who embody the true
        essence of sportsmanship and camaraderie.
      </p>
    </div>
  );
};

export default BlogDetailTeamBuilding;
