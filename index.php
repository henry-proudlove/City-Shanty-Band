<?php
/**
 * @package WordPress
 * @subpackage themename
 */

get_header(); ?>
			
			<?php get_template_part( 'featured'); ?>
			
			<div id="content">
			
			<?php get_template_part( 'intro'); ?>
			<?php get_template_part( 'gigs'); ?>
			<?php get_template_part('shop'); ?>
			
<?php get_footer(); ?>