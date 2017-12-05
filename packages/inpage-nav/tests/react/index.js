import React from 'react';
import ReactDOM from 'react-dom';

import { InpageNavLinks, InpageNavSection } from './inpage-nav.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split au-body">
		<h2>inpage-nav</h2>
			<InpageNavLinks sections={[
				{
					link: 'section1',
					title: 'Section 1',
				},
				{
					link: 'section2',
					title: 'Section 2',
				},
				{
					link: 'section3',
					title: 'Section 3 with onClick',
					onClick: () => console.log('This function is called when the third item is clicked'),
				},
				{
					link: 'section4',
					title: 'Section 4 with onClick',
					onClick: () => console.log('This function is called when the forth item is clicked'),
				},
			]} />

			<InpageNavSection title="Section 1 headline" link="section1">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio fuga adipisci aliquid ut rerum mollitia commodi eligendi, asperiores nostrum
					unde blanditiis eveniet impedit labore, <a href="#link">temporibus exercitationem</a>, provident ab fugit? Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Pariatur est vitae repudiandae sequi illum, odio officiis? Quo nesciunt ipsam recusandae odit, dolores fuga incidunt repudiandae
					reprehenderit, amet numquam necessitatibus doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<p>
					Maecenas eget tincidunt augue. Suspendisse potenti. Proin ornare ultrices molestie. Nunc pretium lacus sit amet dolor porta, vitae sodales erat
					pellentesque. Nullam a libero mattis, tincidunt ante ac, ultrices mi. Vivamus eget venenatis massa, nec feugiat risus. Ut eleifend nisi iaculis diam
					faucibus auctor.
				</p>
			</InpageNavSection>

			<InpageNavSection title="Section 2 headline with different level" link="section2" level="5">
				<p>
					Voluptate commodi, labore sapiente natus iste facilis eaque harum fuga recusandae dolores laborum iusto perspiciatis, numquam dignissimos blanditiis
					alias impedit ipsa. Unde?
				</p>
				<p>
					Phasellus rhoncus tempor nunc, in facilisis leo lobortis sit amet. Duis arcu sem, placerat vel nibh fringilla, dictum imperdiet lectus. Nam mauris ante,
					imperdiet id ultricies eget, molestie at lacus. Aliquam erat volutpat. Donec iaculis, massa nec iaculis blandit, magna lectus tempor nibh, eget fringilla
					nisi felis nec ex. Donec molestie eleifend posuere. Proin <a href="#link">laoreet</a> magna a odio pharetra ultrices. Donec sit amet dolor at felis fauci
					orci. Praesent tempor eu magna non ultrices. Vestibulum leo nunc, venenatis et lacinia et, tristique molestie arcu. Nullam scelerisque fermentum eros
					rutrum semper. Pellentesque a volutpat dolor. Cras dolor tellus, fermentum nec ipsum ac, facilisis commodo mi. Suspendisse potenti. Suspendisse in odio
					posuere, pellentesque lorem nec, tempor mauris. Ut <a href="#link">scelerisque justo</a> a aliquam rutrum.
				</p>
				<p>
					Praesent tincidunt rutrum euismod. Cras hendrerit dui in tortor laoreet condimentum. Sed pellentesque ante vel turpis iaculis mattis. Morbi rutrum
					sagittis mi, id rhoncus sem congue quis. Vestibulum dolor libero, congue eget nisl quis, varius dapibus justo. Morbi eget justo sit amet risus interdum
					luctus non id tortor. Maecenas feugiat malesuada pretium. Nam sagittis erat feugiat placerat pharetra.
				</p>
			</InpageNavSection>

			<InpageNavSection title="Section 3 headline with headingClass" link="section3" headingClass="au-display-3">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, molestiae blanditiis, enim unde laudantium voluptate fuga excepturi explicabo quae, nulla
					dolorum, ea doloribus ducimus. Nesciunt eveniet ab a nobis perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus animi, dolorem
					ut amet magnam ad architecto assumenda enim unde dolores, ratione incidunt, ipsum aspernatur delectus quibusdam officiis, vero dolor illo?
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Itaque aliquid et iusto ex debitis quos eum sit quidem ab culpa tempora
					voluptatibus sequi quam sunt unde, fuga cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo aliquam beatae unde corporis autem quos
					dignissimos delectus ullam odit, dolore natus, eos, nam eligendi reprehenderit <a href="#link">qui</a> alias voluptatibus. Minima, ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sequi itaque voluptatibus. Maxime tenetur, dolorum enim, adipisci, ullam, quibusdam nemo
					debitis nihil magni itaque voluptatem. Ullam <a href="#link">minus</a> officia nulla mollitia.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, omnis earum eveniet beatae ipsa itaque amet obcaecati in dolorum sapiente atque
					magnam sit accusantium nemo commodi aut debitis, ea quod. Lorem ipsum <a href="#link">dolor sit</a> amet, consectetur adipisicing elit. Veniam magni minus
					soluta neque cumque inventore similique veritatis. Nostrum obcaecati eveniet assumenda ea cupiditate enim laborum voluptate suscipit! Expedita?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam earum, accusantium soluta explicabo debitis recusandae, illum beatae ullam pariatur aliquam,
					iusto vero quia! Totam consequatur rerum tenetur, placeat ex beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, magni accusamus
					molestiae eveniet expedita aliquam distinctio cum voluptatem quidem voluptatum, ut possimus autem, architecto ratione, officia labore placeat excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Doloremque necessitatibus laborum itaque, suscipit, expedita est possimus!
					Veritatis mollitia eligendi harum consequuntur fugit, explicabo, facilis corporis ex dolore, ipsam soluta totam? Lorem ipsum dolor sit amet, consectetur
					Beatae, deserunt facilis nobis! <a href="#link">Illum</a> aspernatur commodi perspiciatis cum esse, labore asperiores natus in mollitia totam inventore. Ab
					ducimus numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vel itaque, neque, magni, modi eum blanditiis facere, natus
					accusamus expedita autem? <a href="#link">Eveniet</a> ad, consequatur <a href="#link">architecto</a> illum suscipit culpa <a href="#link">iure</a>. Sed!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat <a href="#link">ipsa</a> recusandae eos id voluptatibus ut molestias earum placeat odit
					ex, delectus quas doloribus iusto <a href="#link">odio</a> dolorum, <a href="#link">similique</a>, necessitatibus <a href="#link">autem</a> quam.
				</p>
			</InpageNavSection>

			<InpageNavSection
				title="Section 4 with changed section link and onClick"
				link="section4"
				sectionLink="Different sectionLink text"
				sectionLinkOnClick={ () => console.log('This function is called when the section link is clicked') }
			>
				<p>
					Das ende&hellip;
				</p>
			</InpageNavSection>
		</div>
		<div className="split au-body au-body--dark">
			<h2>inpage-nav</h2>
			<InpageNavLinks dark sections={[
				{
					link: 'sectiondark1',
					title: 'Section 1',
				},
				{
					link: 'sectiondark2',
					title: 'Section 2',
				},
				{
					link: 'sectiondark3',
					title: 'Section 3 with onClick',
					onClick: () => console.log('This function is called when the third item is clicked'),
				},
				{
					link: 'sectiondark4',
					title: 'Section 4 with onClick',
					onClick: () => console.log('This function is called when the forth item is clicked'),
				},
			]} />

			<InpageNavSection title="Section 1 headline" link="sectiondark1">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio fuga adipisci aliquid ut rerum mollitia commodi eligendi, asperiores nostrum
					unde blanditiis eveniet impedit labore, <a href="#link">temporibus exercitationem</a>, provident ab fugit? Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Pariatur est vitae repudiandae sequi illum, odio officiis? Quo nesciunt ipsam recusandae odit, dolores fuga incidunt repudiandae
					reprehenderit, amet numquam necessitatibus doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<p>
					Maecenas eget tincidunt augue. Suspendisse potenti. Proin ornare ultrices molestie. Nunc pretium lacus sit amet dolor porta, vitae sodales erat
					pellentesque. Nullam a libero mattis, tincidunt ante ac, ultrices mi. Vivamus eget venenatis massa, nec feugiat risus. Ut eleifend nisi iaculis diam
					faucibus auctor.
				</p>
			</InpageNavSection>

			<InpageNavSection title="Section 2 headline with different level" link="sectiondark2" level="5">
				<p>
					Voluptate commodi, labore sapiente natus iste facilis eaque harum fuga recusandae dolores laborum iusto perspiciatis, numquam dignissimos blanditiis
					alias impedit ipsa. Unde?
				</p>
				<p>
					Phasellus rhoncus tempor nunc, in facilisis leo lobortis sit amet. Duis arcu sem, placerat vel nibh fringilla, dictum imperdiet lectus. Nam mauris ante,
					imperdiet id ultricies eget, molestie at lacus. Aliquam erat volutpat. Donec iaculis, massa nec iaculis blandit, magna lectus tempor nibh, eget fringilla
					nisi felis nec ex. Donec molestie eleifend posuere. Proin <a href="#link">laoreet</a> magna a odio pharetra ultrices. Donec sit amet dolor at felis fauci
					orci. Praesent tempor eu magna non ultrices. Vestibulum leo nunc, venenatis et lacinia et, tristique molestie arcu. Nullam scelerisque fermentum eros
					rutrum semper. Pellentesque a volutpat dolor. Cras dolor tellus, fermentum nec ipsum ac, facilisis commodo mi. Suspendisse potenti. Suspendisse in odio
					posuere, pellentesque lorem nec, tempor mauris. Ut <a href="#link">scelerisque justo</a> a aliquam rutrum.
				</p>
				<p>
					Praesent tincidunt rutrum euismod. Cras hendrerit dui in tortor laoreet condimentum. Sed pellentesque ante vel turpis iaculis mattis. Morbi rutrum
					sagittis mi, id rhoncus sem congue quis. Vestibulum dolor libero, congue eget nisl quis, varius dapibus justo. Morbi eget justo sit amet risus interdum
					luctus non id tortor. Maecenas feugiat malesuada pretium. Nam sagittis erat feugiat placerat pharetra.
				</p>
			</InpageNavSection>

			<InpageNavSection title="Section 3 headline with headingClass" link="sectiondark3" headingClass="au-display-3">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, molestiae blanditiis, enim unde laudantium voluptate fuga excepturi explicabo quae, nulla
					dolorum, ea doloribus ducimus. Nesciunt eveniet ab a nobis perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus animi, dolorem
					ut amet magnam ad architecto assumenda enim unde dolores, ratione incidunt, ipsum aspernatur delectus quibusdam officiis, vero dolor illo?
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Itaque aliquid et iusto ex debitis quos eum sit quidem ab culpa tempora
					voluptatibus sequi quam sunt unde, fuga cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo aliquam beatae unde corporis autem quos
					dignissimos delectus ullam odit, dolore natus, eos, nam eligendi reprehenderit <a href="#link">qui</a> alias voluptatibus. Minima, ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sequi itaque voluptatibus. Maxime tenetur, dolorum enim, adipisci, ullam, quibusdam nemo
					debitis nihil magni itaque voluptatem. Ullam <a href="#link">minus</a> officia nulla mollitia.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, omnis earum eveniet beatae ipsa itaque amet obcaecati in dolorum sapiente atque
					magnam sit accusantium nemo commodi aut debitis, ea quod. Lorem ipsum <a href="#link">dolor sit</a> amet, consectetur adipisicing elit. Veniam magni minus
					soluta neque cumque inventore similique veritatis. Nostrum obcaecati eveniet assumenda ea cupiditate enim laborum voluptate suscipit! Expedita?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam earum, accusantium soluta explicabo debitis recusandae, illum beatae ullam pariatur aliquam,
					iusto vero quia! Totam consequatur rerum tenetur, placeat ex beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, magni accusamus
					molestiae eveniet expedita aliquam distinctio cum voluptatem quidem voluptatum, ut possimus autem, architecto ratione, officia labore placeat excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Doloremque necessitatibus laborum itaque, suscipit, expedita est possimus!
					Veritatis mollitia eligendi harum consequuntur fugit, explicabo, facilis corporis ex dolore, ipsam soluta totam? Lorem ipsum dolor sit amet, consectetur
					Beatae, deserunt facilis nobis! <a href="#link">Illum</a> aspernatur commodi perspiciatis cum esse, labore asperiores natus in mollitia totam inventore. Ab
					ducimus numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vel itaque, neque, magni, modi eum blanditiis facere, natus
					accusamus expedita autem? <a href="#link">Eveniet</a> ad, consequatur <a href="#link">architecto</a> illum suscipit culpa <a href="#link">iure</a>. Sed!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat <a href="#link">ipsa</a> recusandae eos id voluptatibus ut molestias earum placeat odit
					ex, delectus quas doloribus iusto <a href="#link">odio</a> dolorum, <a href="#link">similique</a>, necessitatibus <a href="#link">autem</a> quam.
				</p>
			</InpageNavSection>

			<InpageNavSection
				title="Section 4 with changed section link and onClick"
				link="sectiondark4"
				sectionLink="Different sectionLink text"
				sectionLinkOnClick={ () => console.log('This function is called when the section link is clicked') }
			>
				<p>
					Das ende&hellip;
				</p>
			</InpageNavSection>
		</div>
	</div>,

	document.getElementById('root'),
);
