<?php
/**
 * @package WordPress
 * @subpackage themename
 */

get_header(); ?>

		<div id="content">
		
			<section id=error-msg">

			<article id="post-0" class="post error404 not-found" role="article">
				<header class="entry-header">
					<h1 class="entry-title"><?php _e( '404' ); ?></h1>
				</header>

				<div class="entry-meta">
					<p><?php _e( 'Can not find that for shit! Try the <a href="http://www.cityshantyband.com">Home Page</a>.', 'themename' ); ?></p>
				</div><!-- .entry-content -->
			</article><!-- #post-0 -->
			
			</section> <!--error-msg -->

<?php get_footer(); ?>